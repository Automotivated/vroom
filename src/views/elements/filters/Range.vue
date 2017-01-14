<template>
	<div class="vrm-filter__range" v-cloak>
		<h5 @click="collapse">
			{{ $t(filter.label) }}
			<i v-svg:chevron class="vrm-chevron__top" :class="{'vrm-chevron-toggle': !expanded}"></i>
		</h5>
		<div v-if="expanded">
			<vue-slider ref="slider" v-bind="slider" @drag-end="updateFilter"></vue-slider>
			<div class="vrm-range">
				<span class="vrm-range-input">
					<label :for="getUniqueId('from')" v-html="inputLabel"></label>
					<input
						type="text"
						data-range="from"
						:id="getUniqueId('from')"
						:value="minSelected"
						@focus="reformat"
						@blur="format"
						@keyup.enter="blur">
				</span>
				<span class="vrm-range-seperator">-</span>
				<span class="vrm-range-input">
					<label :for="getUniqueId('to')" v-html="inputLabel"></label>
					<input
						type="text"
						data-range="to"
						:id="getUniqueId('to')"
						:value="maxSelected"
						@focus="reformat"
						@blur="format"
						@keyup.enter="blur">
				</span>
			</div>
		</div>
	</div>
</template>

<script>
// import styles
import 'components/range'

// import scripts
import Vue from 'vue'
import vueSlider from 'vue-slider-component'
import filter from './filter'
import { normalizeNumber } from '../../../filters/format'

export default {
	name: 'Range',
	props: ['filter'],
	mixins: [filter],
	components: {
		vueSlider
	},
	computed: {
		slider () {
			const max = this.filter.options.length - 1
			const start = this.getRangeKey(this.filter.from.active[0]) || 0
			const end = this.getRangeKey(this.filter.to.active[0]) || max

			return {
				width: '100%',
				lazy: true,
				height: 4,
				dotSize: 18,
				min: 0,
				max: max,
				interval: 1,
				tooltip: false,
				piecewise: false,
				class: 'vrm-slider',
				value: [start, end]
			}
		},
		inputLabel () {
			if (this.filter.locale && this.filter.locale === 'currency') {
				switch (Vue.i18n.translate('filters.global.currency')) {
				case 'USD':
					return '&#36;'
				case 'EUR':
				default:
					return '&euro;'
				}
			}
		},
		minSelected () {
			const value = this.filter.options[this.slider.value[0]]
			if (this.filter.locale) {
				return normalizeNumber(value)
			}
			return value
		},
		maxSelected () {
			const value = this.filter.options[this.slider.value[1]]
			if (this.filter.locale) {
				return normalizeNumber(value)
			}
			return value
		}
	},
	methods: {
		getRangeKey (value) {
			const key = Object.keys(this.filter.options).find(key => this.filter.options[key] === value)
			return parseInt(key)
		},
		getUniqueId (option) {
			option = (typeof option === 'string')
				? option.toLowerCase()
				: option.toString()
			return 'filter-' + this.filter.key + '-' + option
		},
		blur (evt) {
			const elm = evt.target || evt.srcElement
			const type = 'blur'
			let event
			// trigger blur event
			if (document.createEvent) {
				// eslint-disable-next-line no-undef
				event = new Event(type)
				elm.dispatchEvent(event)
			} else {
				event = document.createEventObject()
				elm.fireEvent('on' + type, event)
			}
		},
		format (evt) {
			const elm = evt.target || evt.srcElement
			const value = this.parseNumber(elm.value)
			// get closest value
			const closest = this.filter.options.reduce((prev, curr) => {
				return (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev)
			})
			// get the key of the closest
			const key = this.getRangeKey(closest)
			// get the current value from the slider component
			const currentValue = this.$refs.slider.getValue()

			// first fix the formatting
			if (this.filter.locale) {
				elm.value = normalizeNumber(value)
			}
			// nothing changed
			if (
				(elm.dataset.range === 'from' && key === currentValue[0]) ||
				(elm.dataset.range === 'to' && key === currentValue[1])
			) {
				return null
			}
			// update to new values and fix edge cases
			if (elm.dataset.range === 'from' && key <= currentValue[1]) {
				Vue.set(this.slider, 'value', [key, currentValue[1]])
			} else if (elm.dataset.range === 'from') {
				Vue.set(this.slider, 'value', [currentValue[1], currentValue[1]])
			} else if (elm.dataset.range === 'to' && key >= currentValue[0]) {
				Vue.set(this.slider, 'value', [currentValue[0], key])
			} else if (elm.dataset.range === 'to') {
				Vue.set(this.slider, 'value', [currentValue[0], currentValue[0]])
			} else {
				return null
			}
			// call to the real update filter function
			this.updateFilter()
		},
		reformat (evt) {
			const elm = evt.target || evt.srcElement
			elm.value = this.parseNumber(elm.value)
		},
		updateFilter (ref) {
			let currentValue = this.slider.value
			if (ref) {
				currentValue = this.$refs.slider.getValue()
			}
			this.$store.dispatch('filters/updateFilter', [{
				key: this.filter.key,
				range: 'from',
				value: this.filter.options[currentValue[0]]
			}, {
				key: this.filter.key,
				range: 'to',
				value: this.filter.options[currentValue[1]]
			}])
		},
		parseNumber (n) {
			return n.replace(/[^0-9]+/g, '')
		}
	}
}
</script>

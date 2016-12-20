<template>
	<div class="vrm-filter__range" v-cloak>
		<h5 @click="collapse">{{ $t(filter.label) }}</h5>
		<div v-if="expanded">
			<vue-slider ref="slider" v-bind="slider"></vue-slider>
			<div class="vrm-range">
				<span class="vrm-range-input">
					<label :for="getUniqueId('from')" v-html="inputLabel"></label>
					<input
						type="text"
						data-range="from"
						:id="getUniqueId('from')"
						:value="minSelected"
						@focus="reformat"
						@blur="format">
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
						@blur="format">
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
import { normalizeNumber } from '../../../filters/format'

/**
 * todo: on focus, strip formatting
 * label on the left (euro sign or something...)
 */
export default {
	name: 'Range',
	props: ['filter'],
	components: {
		vueSlider
	},
	data () {
		var max = this.filter.options.length - 1
		return {
			slider: {
				width: '100%',
				lazy: true,
				height: 4,
				dotSize: 14,
				min: 0,
				max: max,
				interval: 1,
				tooltip: false,
				piecewise: false,
				class: 'vrm-slider',
				value: [0, max]
			},
			expanded: true
		}
	},
	computed: {
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
			var value = this.filter.options[this.slider.value[0]]
			if (this.filter.locale) {
				return normalizeNumber(value)
			}
			return value
		},
		maxSelected () {
			var value = this.filter.options[this.slider.value[1]]
			if (this.filter.locale) {
				return normalizeNumber(value)
			}
			return value
		}
	},
	methods: {
		collapse () {
			this.expanded = !this.expanded
		},
		getUniqueId (option) {
			option = (typeof option === 'string')
				? option.toLowerCase()
				: option.toString()
			return 'filter-' + this.filter.key + '-' + option
		},
		format (evt) {
			var elm = evt.target || evt.srcElement
			var value = this.parseNumber(elm.value)
			// get closest value
			var closest = this.filter.options.reduce((prev, curr) => {
				return (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev)
			})
			// get the key of the closest
			var key = parseInt(Object.keys(this.filter.options).find(key => this.filter.options[key] === closest))
			// get the current value from the slider component
			var currentValue = this.$refs.slider.getValue()

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
			}
		},
		reformat (evt) {
			var elm = evt.target || evt.srcElement
			elm.value = this.parseNumber(elm.value)
		},
		parseNumber (n) {
			return n.replace(/[^0-9]+/g, '')
		}
	}
}
</script>

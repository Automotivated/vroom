<template>
	<div class="vrm-filter__range" v-cloak>
		<h5 @click="collapse">{{ $t(filter.label) }}</h5>
		<div v-if="expanded">
			<vue-slider ref="slider" v-bind="slider"d></vue-slider>
			<div class="vrm-range-inputs">
				<input type="text" :value="minSelected">
				<span>-</span>
				<input type="text" :value="maxSelected">
			</div>
		</div>
	</div>
</template>

<script>
// import styles
import 'components/range'

// import scripts
import vueSlider from 'vue-slider-component'
import { normalizeNumber } from '../../../filters/format'

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
		minSelected () {
			var value = this.filter.options[this.slider.value[0]]
			if (this.filter.normalize) {
				return normalizeNumber(value)
			}
			return value
		},
		maxSelected () {
			var value = this.filter.options[this.slider.value[1]]
			if (this.filter.normalize) {
				return normalizeNumber(value)
			}
			return value
		}
	},
	methods: {
		collapse () {
			this.expanded = !this.expanded
		}
	}
}
</script>

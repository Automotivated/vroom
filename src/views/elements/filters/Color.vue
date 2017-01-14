<template>
	<div class="vrm-filter__color" v-cloak>
		<h5 @click="collapse">{{ $t(filter.label) }}</h5>
		<ul>
			<li v-for="option in filter.options" :key="option.value">
				<label :title="$t(option.label)">
					<input
						type="checkbox"
						:name="filter.key"
						:value="option.value"
						:checked="inArray(option.value, filter.active)"
						@change="updateFilter">
					<span :class="className(option.value)"></span>
				</label>
			</li>
		</ul>
	</div>
</template>

<script>
// import styles
import 'components/color'

// import scripts
import { inArray } from '../../../filters/util'

export default {
	name: 'Color',
	props: ['filter'],
	data () {
		return {
			expanded: true
		}
	},
	methods: {
		inArray,
		collapse () {
			this.expanded = !this.expanded
		},
		className (val) {
			return 'vrm-color__' + val.toLowerCase()
		},
		updateFilter (evt) {
			const elm = evt.target || evt.srcElement
			const action = elm.checked === false
				? 'filters/removeFilter'
				: 'filters/addFilter'

			this.$store.dispatch(action, [{
				key: elm.name,
				value: elm.value
			}])
		}
	}
}
</script>


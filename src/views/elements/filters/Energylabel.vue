<template>
	<div class="vrm-filter__multiple vrm-filter__energylabel" v-cloak>
		<h5 @click="collapse">{{ $t(filter.label) }}</h5>
		<ul>
			<li v-for="option in filter.options" :key="option.value">
				<label>
					<input
						type="checkbox"
						:name="filter.key"
						:value="option.value"
						:checked="inArray(option.value, filter.active)"
						@change="updateFilter">
					<span></span>
					<span class="vrm-energylabel" :class="className(option.value)">
						{{ $t(option.label) }}
					</span>
				</label>
				<span v-text="option.total"></span>
			</li>
		</ul>
	</div>
</template>

<script>
// import styles
import 'components/energylabel'

// import scripts
import { inArray } from '../../../filters/util'

export default {
	name: 'Energylabel',
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
			return 'vrm-energylabel__' + val.toLowerCase()
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

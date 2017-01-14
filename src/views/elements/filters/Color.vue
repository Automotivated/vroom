<template>
	<div class="vrm-filter__color" v-cloak>
		<h5 @click="collapse">
			{{ $t(filter.label) }}
			<i v-svg:chevron class="vrm-chevron__top" :class="{'vrm-chevron-toggle': !expanded}"></i>
		</h5>
		<ul>
			<li v-for="option in visibleOptions" :key="option.value">
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
import filter from './filter'

export default {
	name: 'Color',
	props: ['filter'],
	mixins: [filter],
	data () {
		return {
			limited: false
		}
	},
	methods: {
		className (val) {
			return 'vrm-color__' + val.toLowerCase()
		}
	}
}
</script>


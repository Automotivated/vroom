<template>
	<div class="vrm-filter__multiple" v-cloak>
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
					<span></span>
					{{ $t(option.label) }}
				</label>
				<span v-text="option.total"></span>
			</li>
		</ul>
		<a href="#" v-if="showMore" v-show="expanded" @click.prevent="toggle" v-html="toggleText"></a>
	</div>
</template>

<script>
// import styles
import 'components/multiple'
// import scripts
import filter from './filter'

export default {
	name: 'Multiple',
	props: ['filter'],
	mixins: [filter],
	methods: {
		getUniqueId (option) {
			option = (typeof option === 'string')
				? option.toLowerCase()
				: option.toString()
			return 'filter-' + this.filter.key + '-' + option
		}
	}
}
</script>

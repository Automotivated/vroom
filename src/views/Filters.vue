<template>
	<div class="vrm-filters">
		<div class="vrm-filter" v-for="(filter, key) in filteredFilters">
			<component :is="filter.type" :filter="filter" :key="key"></component>
		</div>
	</div>
</template>

<script>
// import styles
import 'components/filters'

// import scripts
import { mapGetters } from 'vuex'

import Multiple from './elements/filters/Multiple.vue'
import MultipleSearch from './elements/filters/MultipleSearch.vue'
import Range from './elements/filters/Range.vue'
import Search from './elements/filters/Search.vue'
import Energylabel from './elements/filters/Energylabel.vue'
import Color from './elements/filters/Color.vue'

export default {
	name: 'Sidebar',
	components: {
		Multiple,
		MultipleSearch,
		Range,
		Search,
		Color,
		Energylabel
	},
	computed: {
		...mapGetters({
			filteredFilters: 'filters/filteredFilters'
		})
	}
}
</script>

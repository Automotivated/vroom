<template>
	<aside v-cloak class="vrm-sidebar">
		<stats v-if="!isMobile"></stats>
		<search v-if="showSearch"></search>
		<filters v-if="showFilters"></filters>
	</aside>
</template>

<script>
// import styles
import 'components/sidebar'

// import components
import { mapGetters } from 'vuex'
import Stats from './Stats.vue'
import Search from './Search.vue'
import Filters from './Filters.vue'

export default {
	name: 'Sidebar',
	components: {
		Search,
		Stats,
		Filters
	},
	computed: {
		...mapGetters({
			isMobile: 'app/isMobile',
			showFilters: 'app/showFilters',
			showSearch: 'app/showSearch'
		})
	}
}
</script>

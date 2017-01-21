<template>
	<div class="vrm-filters">
		<div class="vrm-filters__content">
			<button v-if="showFilters && isMobile" @click.prevent="hideFilters()">
				<i v-svg:chevron></i>
				{{ $t('filters.global.back_to_overview') }}
			</button>
			<div class="vrm-filter" v-for="(filter, key) in filteredFilters">
				<component :is="filter.type" :filter="filter" :key="key"></component>
			</div>
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
import Energylabel from './elements/filters/Energylabel.vue'
import Color from './elements/filters/Color.vue'

export default {
	name: 'Filters',
	components: {
		Multiple,
		MultipleSearch,
		Range,
		Color,
		Energylabel
	},
	computed: {
		...mapGetters({
			filteredFilters: 'filters/filteredFilters',
			showFilters: 'app/showFilters',
			isMobile: 'app/isMobile'
		})
	},
	methods: {
		hideFilters () {
			this.$store.dispatch('app/toggleTopbar', 'filters')
		}
	}
}
</script>

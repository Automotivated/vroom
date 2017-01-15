<template>
	<div class="vrm-active">
		<div class="vrm-active-filters" v-if="activeFilters.length > 0">
			<div v-for="filter in activeFilters">
				<span v-html="getLabel(filter)"></span>
				<i v-svg:close @click="removeFilter(filter)"></i>
			</div>
		</div>
		<a v-if="activeFilters.length > 0" class="vrm-clear-active" href="#" @click.prevent="clearFilters()">{{ $t('filters.global.clear_filters') }}</a>
		<span v-else>{{ $t('filters.global.no_filters') }}
	</div>
</template>

<script>
// import styles
import 'components/active'

// import scripts
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { normalizeNumber, toLocale } from '../filters/format'
import '../directives/svg'

export default {
	name: 'Active',
	computed: {
		...mapGetters({
			activeFilters: 'filters/filteredActiveFilters'
		})
	},
	methods: {
		removeFilter (filter) {
			this.$store.dispatch('filters/removeFilter', [filter])
		},
		clearFilters () {
			this.$store.dispatch('filters/removeFilter', this.activeFilters.slice())
		},
		getLabel (filter) {
			const masterFilter = this.$store.state.filters.filters[filter.key]
			if (filter.range) {
				let label = ''
				label += Vue.i18n.translate(masterFilter[filter.range].label)
				label += ': '
				var locale = toLocale(masterFilter.locale)
				if (locale) {
					label += locale + ' '
				}
				label += (masterFilter.locale)
					? normalizeNumber(filter.value)
					: filter.value
				return label
			} else {
				for (var i = masterFilter.options.length - 1; i >= 0; i--) {
					var item = masterFilter.options[i]
					if (item.value === filter.value) {
						return Vue.i18n.translate(item.label)
					}
				}
				return filter.value
			}
		}
	}
}
</script>

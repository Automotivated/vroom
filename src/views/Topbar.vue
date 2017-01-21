<template>
	<div class="vrm-topbar">
		<button
			class="vrm-topbar__button vrm-topbar__button--filters"
			:class="{'vrm-topbar__active': (active === 'filters')}"
			@click.prevent="toggle('filters')">
			<i v-svg:chevron></i>
			{{ $t('filters.global.filters') }}
		</button>
		<button
			class="vrm-topbar__button vrm-topbar__button--active"
			:class="{'vrm-topbar__active': (active === 'active')}"
			@click.prevent="toggle('active')">
			{{ activeFilters.length }}
		</button>
		<button
			class="vrm-topbar__button vrm-topbar__button--search"
			:class="{'vrm-topbar__active': (active === 'search')}"
			@click.prevent="toggle('search')">
			<i v-svg:glass></i>
		</button>
		<button
			class="vrm-topbar__button vrm-topbar__button--controls"
			:class="{'vrm-topbar__active': (active === 'controls')}"
			@click.prevent="toggle('controls')">
			<i v-svg:sort></i>
		</button>
	</div>
</template>

<script>
// import styles
import 'components/topbar'

// import components
import { mapGetters } from 'vuex'

export default {
	name: 'Topbar',
	data () {
		return {
			active: null
		}
	},
	computed: {
		...mapGetters({
			isMobile: 'app/isMobile',
			activeFilters: 'filters/filteredActiveFilters'
		})
	},
	methods: {
		toggle (element) {
			if (this.active !== element) {
				this.$store.dispatch('app/toggleTopbar', this.active)
				this.active = element
			} else {
				this.active = null
			}
			this.$store.dispatch('app/toggleTopbar', element)
		}
	}
}
</script>




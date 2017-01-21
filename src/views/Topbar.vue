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
	mounted () {
		if (this.isMobile) {
			const doc = document.documentElement
			const topbar = document.getElementsByClassName('vrm-topbar')
			let node = topbar[0]
			let curtop = node.offsetTop
			let curtopscroll = 0
			while (node.offsetParent) {
				node = node.offsetParent
				curtop += node.offsetTop
				curtopscroll += node.offsetParent ? node.offsetParent.scrollTop : 0
			}
			const offset = curtop - curtopscroll

			// @todo: fix hammering this event
			// @todo: sticky configurable?
			window.addEventListener('scroll', (evt) => {
				var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
				if (top > offset) {
					topbar[0].classList.add('vrm-topbar--sticky')
				} else {
					topbar[0].classList.remove('vrm-topbar--sticky')
				}
			}, false)
		}
	},
	methods: {
		toggle (element) {
			if (this.active !== element) {
				this.$store.dispatch('app/toggleTopbar', this.active)
			}

			if (this.active !== element && element !== 'filters') {
				this.active = element
			} else {
				this.active = null
			}

			this.$store.dispatch('app/toggleTopbar', element)
		}
	}
}
</script>




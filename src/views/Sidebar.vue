<template>
	<aside v-cloak class="vrm-sidebar">
		<button v-if="isMobile && show" class="vrm-sidebar__toggle" @click.prevent="toggleSidebar()">
			<i v-svg:chevron></i>
			{{ $t('filters.global.back_to_results') }}
		</button>
		<div class="vrm-sidebar__content">
			<active v-if="isMobile && show"></active>
			<stats v-if="!isMobile"></stats>
			<filters></filters>
		</div>
	</aside>
</template>

<script>
// import styles
import 'components/sidebar'

// import components
import Stats from './Stats.vue'
import Filters from './Filters.vue'
import Active from './Active.vue'
import { isMobile } from '../filters/util'

export default {
	name: 'Sidebar',
	components: {
		Active,
		Stats,
		Filters
	},
	data () {
		return {
			show: true,
			mobile: isMobile()
		}
	},
	computed: {
		isMobile () {
			return isMobile()
		}
	},
	methods: {
		toggleSidebar () {
			this.show = !this.show
		}
	}
}
</script>

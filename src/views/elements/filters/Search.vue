<template>
	<div class="vrm-filter__search" v-if="!isMobile">
		<input type="text" :name="filter.key" :value="filter.active[0]" :placeholder="getPlaceholderText" id="trefwoord_searchfield">
		<button type="button"><i v-svg:glass></i></button>
	</div>
</template>

<script>
// import styles
import 'components/search'

// import scripts
import Vue from 'vue'
import { isMobile } from '../../../filters/util'

export default {
	name: 'Search',
	props: ['filter'],
	computed: {
		getPlaceholderText () {
			return Vue.i18n.translate(this.filter.label) + '…'
		},
		isMobile () {
			return isMobile()
		}
	}
}
</script>

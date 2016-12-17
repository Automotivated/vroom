<template>
	<div class="vrm-search">
		<input type="text" :name="filter.key" :value="filter.active[0]" :placeholder="getPlaceholderText" id="trefwoord_searchfield">
		<button type="button"><i v-svg:glass></i></button>
	</div>
</template>

<script>
// import styles
import Vue from 'vue'
import 'components/search'

// import scripts
import '../../../directives/svg'

export default {
	name: 'Search',
	props: ['filter'],
	computed: {
		getPlaceholderText () {
			return Vue.i18n.translate(this.filter.label) + '…'
		}
	}
}
</script>

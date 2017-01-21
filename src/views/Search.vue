<template>
	<div class="vrm-search">
		<div class="vrm-search__content">
			<input type="text" :name="filter.key" :value="filter.active[0]" :placeholder="getPlaceholderText" id="trefwoord_searchfield">
			<button type="button"><i v-svg:glass></i></button>
		</div>
	</div>
</template>

<script>
// import styles
import 'components/search'

// import scripts
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
	name: 'Search',
	computed: {
		...mapGetters({
			filter: 'filters/getSearch'
		}),
		getPlaceholderText () {
			return Vue.i18n.translate(this.filter.label) + '…'
		}
	}
}
</script>

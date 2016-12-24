<template>
	<header>
		<h1 v-text="heading" @click.prevent="setLoading()"></h1>
		<active-filters></active-filters>
	</div>
</template>

<script>
import ActiveFilters from './ActiveFilters.vue'

export default {
	name: 'Topbar',
	components: {
		ActiveFilters
	},
	data () {
		return {
			heading: 'Booo!'
		}
	},
	methods: {
		setLoading () {
			this.$store.dispatch('app/toggleLoading')
		}
	}
}
</script>

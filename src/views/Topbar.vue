<template>
	<header>
		<h1 v-text="heading" @click.prevent="setLoading()"></h1>
		<p>
			{{ $t('filters.masterdata.body.label') }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'Topbar',
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

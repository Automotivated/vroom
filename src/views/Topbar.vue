<template>
	<header>
		<h1 v-text="heading"></h1>
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
	}
}
</script>

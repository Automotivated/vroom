<template>
	<header>
		<h1 v-text="heading"></h1>
		<p>
			{{ $t('i18n.masterdata.body') }}
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

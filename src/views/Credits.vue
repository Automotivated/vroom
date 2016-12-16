<template>
	<footer class="vrm-credits">
		<small>Powered by <a href="http://vroom.automotivated.nl/">Automotivated.vroom( )</a></small> <small v-html="getVersion()" :title="getBinaryVersion()">v01111010101101001</small>
	</footer>
</template>

<script>
// import styles
import 'components/credits'

// import scripts
import { getBinaryVersion, getCopy, getVersion } from '../filters/version'

export default {
	name: 'Topbar',
	methods: {
		getCopy,
		getVersion,
		getBinaryVersion
	}
}
</script>

<template>
	<div class="vrm-workspace">
		<active></active>
		<results></results>
	</div>
</template>

<script>
// import styles
import 'components/workspace'

// import scripts
import Active from './Active'
import Results from './Results'

export default {
	name: 'Workspace',
	components: {
		Active,
		Results
	}
}
</script>

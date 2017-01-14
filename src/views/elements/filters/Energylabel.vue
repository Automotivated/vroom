<template>
	<div class="vrm-filter__multiple vrm-filter__energylabel" v-cloak>
		<h5 @click="collapse">{{ $t(filter.label) }}</h5>
		<ul>
			<li v-for="option in visibleOptions" :key="option.value">
				<label :title="$t(option.label)">
					<input
						type="checkbox"
						:name="filter.key"
						:value="option.value"
						:checked="inArray(option.value, filter.active)"
						@change="updateFilter">
					<span></span>
					<span class="vrm-energylabel" :class="className(option.value)">
						{{ $t(option.label) }}
					</span>
				</label>
				<span v-text="option.total"></span>
			</li>
		</ul>
		<a href="#" v-if="showMore" v-show="expanded" @click.prevent="toggle" v-html="toggleText"></a>
	</div>
</template>

<script>
// import styles
import 'components/energylabel'

// import scripts
import filter from './filter'

export default {
	name: 'Energylabel',
	props: ['filter'],
	mixins: [filter],
	methods: {
		className (val) {
			return 'vrm-energylabel__' + val.toLowerCase()
		}
	}
}
</script>

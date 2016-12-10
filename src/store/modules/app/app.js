/**
 * app module
 * Keeps track of global vuex states
 */

import Vue from 'vue'
import * as types from '../../types'
import * as actions from './actions'

export default {
	state: {
		options: {
			api: {
				endpoint: null,
				version: 'v1',
				key: null
			},
			overviewCount: 24,
			overviewRendering: 'grid',
			debounce: 350,
			availableFilters: ['keyword', 'make', 'model', 'fuel', 'price', 'year', 'mileage', 'body', 'transmission', 'vehicle-type', 'type', 'color', 'doors', 'engine-capacity', 'power', 'additional-tax', 'energylabel', 'options']
		},
		loader: {
			loading: false,
			delays: [800]
		}
	},
	mutations: {
		// Update loading state
		[types.LOADING] (state, loading) {
			Vue.set(state.loader, 'loading', loading)
		},
		// Adds a delay to the stack with a maximum of 10
		[types.ADD_DELAY] (state, delay) {
			if (state.loader.delays.length === 10) {
				state.loader.delays.shift()
			}
			state.loader.delays.push(delay)
		},
		// Update the options provided by the client
		[types.UPDATE_OPTIONS] (state, options) {
			state.options = Object.assign(state.options, options)
		},
		// Update the options provided by the client
		[types.UPDATE_OVERVIEW_RENDERING] (state, rendering) {
			Vue.set(state.options, 'overviewRendering', rendering)
		},
		// Update the options provided by the client
		[types.UPDATE_OVERVIEW_COUNT] (state, count) {
			Vue.set(state.options, 'overviewCount', count)
		}
	},
	getters: {
		options (state) {
			return state.options
		},
		loadingDuration (state) {
			const delays = state.loader.delays
			var sum = delays.reduce(function (a, b) {
				return a + b
			})
			return parseInt(Math.ceil(sum / delays.length))
		}
	},
	actions
}

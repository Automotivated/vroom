/**
 * app module
 * Keeps track of global vuex states
 */

import Vue from 'vue'
import * as types from '../../types'
import * as actions from './actions'

export default {
	namespaced: true,
	state: {
		api: {
			endpoint: 'https://engine.automotivated.nl/api',
			version: 'v1',
			key: null
		},
		options: {
			debounce: 350,
			availableFilters: ['keyword', 'make', 'model', 'fuel', 'price', 'year', 'mileage', 'body', 'transmission', 'vehicle-type', 'type', 'color', 'doors', 'engine-capacity', 'power', 'additional-tax', 'energylabel', 'options']
		},
		loader: {
			loading: false,
			delays: [800]
		},
		updateHistory: false
	},
	mutations: {
		// Update history updates
		[types.TOGGLE_HISTORY] (state) {
			Vue.set(state, 'updateHistory', !state.updateHistory)
		},
		// Update loading state
		[types.TOGGLE_LOADING] (state) {
			Vue.set(state.loader, 'loading', !state.loader.loading)
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
		// Update the api provided by the client
		[types.UPDATE_API] (state, api) {
			state.api = Object.assign(state.api, api)
		}
	},
	getters: {
		loading: state => state.loader.loading,
		options: state => state.options,
		api: state => state.api,
		loadingDelay (state) {
			const delays = state.loader.delays
			var sum = delays.reduce(function (a, b) {
				return a + b
			})
			return parseInt(Math.ceil(sum / delays.length))
		}
	},
	actions
}

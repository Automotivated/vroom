/**
 * results module
 * Keeps track of results state
 */

import Vue from 'vue'
import * as types from '../../types'
import * as actions from './actions'

export default {
	state: {
		results: null
	},
	mutations: {
		[types.UPDATE_RESULTS] (state, results) {
			Vue.set(state, 'results', results)
		}
	},
	getters: {
		results: state => state.results
	},
	actions
}

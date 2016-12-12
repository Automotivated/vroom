/**
 * stats module
 * Keeps track of stats states
 */

import Vue from 'vue'
import * as types from '../../types'
import * as actions from './actions'

export default {
	state: {
		total: 0,
		order: null,
		offset: 0,
		size: 24,
		display: 'grid'
	},
	mutations: {
		[types.UPDATE_TOTAL] (state, total) {
			Vue.set(state, 'total', total)
		},
		[types.UPDATE_OFFSET] (state, offset) {
			Vue.set(state, 'offset', offset)
		},
		[types.UPDATE_ORDER] (state, order) {
			Vue.set(state, 'order', order)
		},
		[types.UPDATE_DISPLAY] (state, display) {
			Vue.set(state, 'display', display)
		},
		[types.UPDATE_SIZE] (state, size) {
			Vue.set(state, 'size', size)
		}
	},
	getters: {
		total: state => state.total,
		order: state => state.order,
		offset: state => state.offset,
		size: state => state.size,
		display: state => state.display
	},
	actions
}

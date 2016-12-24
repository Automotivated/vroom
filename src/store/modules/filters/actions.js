/**
 * actions that influence the filters state
 */

import * as types from '../../types'

/**
 * addFilter
 */
export const addFilter = ({ commit, state }, payload) => {
	commit(types.ADD_FILTER, {
		key: payload.key,
		value: payload.value
	})
	// add to the active stack
	// update the history
}
/**
 * removeFilter
 */
export const removeFilter = ({ commit, state }, payload) => {
	if (typeof payload.value !== 'undefined') {
		// match on value...
	}
	commit(types.REMOVE_FILTER, {
		key: payload.key
	})
	// add to the active stack
	// update the history
}

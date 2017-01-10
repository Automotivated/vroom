/**
 * actions that influence the filters state
 */

import * as types from '../../types'
import { updateHistory } from '../../../filters/history'
import { findActiveFilterIndex } from '../../../filters/util'

/**
 * addFilter
 */
export const addFilter = ({ commit, state, rootState }, payload) => {
	payload.forEach(filter => {
		commit(types.ADD_FILTER, filter)
	})

	// update the history
	if (rootState.app.updateHistory) {
		updateHistory(state)
	}
}
/**
 * removeFilter
 */
export const removeFilter = ({ commit, state, rootState }, payload) => {
	payload.forEach(filter => {
		const index = findActiveFilterIndex(filter, state.activeFilters)
		if (~index) {
			commit(types.REMOVE_FILTER, { index, filter })
		}
	})

	// update the history
	if (rootState.app.updateHistory) {
		updateHistory(state)
	}
}
/**
 * updateFilter
 */
export const updateFilter = ({ commit, state, rootState }, payload) => {
	payload.forEach(filter => {
		const index = findActiveFilterIndex(filter, state.activeFilters)
		const options = state.filters[filter.key].options
		const ignore = (
			(filter.range === 'from' && options[0] === filter.value) ||
			(filter.range === 'to' && options[options.length - 1] === filter.value)
		)

		if (~index && ignore === true) {
			commit(types.REMOVE_FILTER, { index, filter })
		} else if (~index && ignore === false) {
			commit(types.UPDATE_FILTER, { index, filter })
		} else if (ignore === false) {
			commit(types.ADD_FILTER, filter)
		}
	})

	// update the history
	if (rootState.app.updateHistory) {
		updateHistory(state)
	}
}


/**
 * actions that influence the app state
 *
 */

import * as types from '../../types'

/**
 * updateOptions
 *
 * Get's called when creating the app to get the options in the state instead of a global window object :)
 */
export const updateOptions = ({ commit, state }, options) => {
	if (typeof options.api !== 'undefined') {
		commit(types.UPDATE_API, options.api)
		delete options.api
	}
	commit(types.UPDATE_OPTIONS, options)
}
/**
 * addDelay
 */
export const addDelay = ({ commit, state }, delay) => {
	commit(types.ADD_DELAY, delay)
}
/**
 * setLoading
 */
export const setLoading = ({ commit, state }, loading) => {
	commit(types.LOADING, loading)
}
/**
 * setOverviewRendering
 */
export const setOverviewRendering = ({ commit, state }, rendering) => {
	commit(types.UPDATE_OVERVIEW_RENDERING, rendering)
}
/**
 * setOverviewCount
 */
export const setOverviewCount = ({ commit, state }, count) => {
	commit(types.UPDATE_OVERVIEW_COUNT, count)
}

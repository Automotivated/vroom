/**
 * actions that influence the app state
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
	if (typeof options.overviewRendering !== 'undefined') {
		commit(types.UPDATE_DISPLAY, options.overviewRendering, { root: true })
	}
	if (typeof options.overviewCount !== 'undefined') {
		commit(types.UPDATE_SIZE, options.overviewCount, { root: true })
	}
	if (Object.keys(options).length > 0) {
		commit(types.UPDATE_OPTIONS, options)
	}
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
export const toggleLoading = ({ commit, state }) => {
	commit(types.TOGGLE_LOADING)
}

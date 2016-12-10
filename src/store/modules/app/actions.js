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
	commit(types.UPDATE_OPTIONS, options)
}

/**
 * addDelay
 */
export const addDelay = ({ commit, state }, delay) => {
	commit(types.ADD_DELAY, delay)
}

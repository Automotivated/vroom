/**
 *
 */

import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app/app'
import filters from './modules/filters/filters'
import results from './modules/results/results'
import stats from './modules/stats/stats'

// Tell Vue to use Vuex
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		app,
		filters,
		results,
		stats
	}
})

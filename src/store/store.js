/**
 *
 */

import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'

import app from './modules/app/app'
import filters from './modules/filters/filters'
import results from './modules/results/results'
import stats from './modules/stats/stats'

// Tell Vue to use Vuex
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		app,
		filters,
		results,
		stats,
		i18n: vuexI18n.store
	}
})

Vue.use(vuexI18n.plugin, store)

export default store

/**
 *
 */

import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app/app'
// import hits from './modules/hits/hits'
// import filters from './modules/filters/filters'

// Tell Vue to use Vuex
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		app
		// hits,
		// filters
	}
})

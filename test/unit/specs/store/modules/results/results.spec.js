import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import results from 'src/store/modules/results/results'
import * as types from 'src/store/types'

Vue.use(Vuex)

// all tests for the stats store
describe('Results store', () => {
	let vm = null

	beforeEach(() => {
		vm = new Vue({
			store: new Vuex.Store({
				modules: {
					results: results,
					app: {
						namespaced: true,
						mutations: {
							[types.TOGGLE_LOADING] (state) {
								return true
							},
							[types.ADD_DELAY] (state, value) {
								return value
							}
						}
					}
				}
			})
		})
	})

	describe('results should be null when created', () => {
		it('results should be default null', () => {
			expect(vm.$store.getters['results/results']).to.equal(null)
		})
	})
})

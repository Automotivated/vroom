import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import results from 'src/store/modules/results/results'

Vue.use(Vuex)

// all tests for the stats store
describe('Results store', () => {
	let vm = null

	beforeEach(() => {
		vm = new Vue({
			store: new Vuex.Store({
				modules: {
					results
				}
			})
		})
	})

	describe('results should be null when created', () => {
		it('results should be default null', () => {
			expect(vm.$store.getters.results).to.equal(null)
		})
		it('should update when triggered', () => {
			vm.$store.dispatch('getData')
			expect(vm.$store.getters.results).to.be.an('object')
		})
	})
})

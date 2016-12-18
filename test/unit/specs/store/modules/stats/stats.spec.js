import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import stats from 'src/store/modules/stats/stats'

Vue.use(Vuex)

// all tests for the stats store
describe('Stats store', () => {
	let vm = null

	beforeEach(() => {
		vm = new Vue({
			store: new Vuex.Store({
				modules: {
					stats
				},
				actions: {
					updateResults: ({ commit, state }) => {
						commit('stats/UPDATE_TOTAL', 2040)
					}
				}
			})
		})
	})

	describe('display option in stats be valid', () => {
		it('display should be default a string', () => {
			expect(vm.$store.getters['stats/display']).to.be.an('string')
		})
		it('should update when triggered to change', () => {
			vm.$store.dispatch('stats/setDisplay', 'rows')
			expect(vm.$store.getters['stats/display']).to.equal('rows')
		})
	})

	describe('total option in stats be valid', () => {
		it('total should be default a number', () => {
			expect(vm.$store.getters['stats/total']).to.be.an('number')
		})
		it('should update the total after an api call', () => {
			vm.$store.dispatch('updateResults')
			expect(vm.$store.getters['stats/total']).to.equal(2040)
		})
	})

	describe('size option in stats be valid', () => {
		it('size should be default number', () => {
			expect(vm.$store.getters['stats/size']).to.be.an('number')
		})
		it('should update when triggered to change', () => {
			vm.$store.dispatch('stats/setSize', 40)
			expect(vm.$store.getters['stats/size']).to.equal(40)
		})
	})

	describe('offset option in stats be valid', () => {
		it('offset should be default number', () => {
			expect(vm.$store.getters['stats/offset']).to.be.an('number')
		})
		it('should update when triggered to change', () => {
			vm.$store.dispatch('stats/setOffset', 80)
			expect(vm.$store.getters['stats/offset']).to.equal(80)
		})
	})

	describe('order option in stats be valid', () => {
		it('order should be default be null', () => {
			expect(vm.$store.getters['stats/order']).to.equal(null)
		})
		it('should update when triggered to change', () => {
			vm.$store.dispatch('stats/setOrder', 'asc')
			expect(vm.$store.getters['stats/order']).to.equal('asc')
		})
	})
})

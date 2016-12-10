import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import app from 'src/store/modules/app/app'

Vue.use(Vuex)

// all tests for the app store
describe('App store', () => {
	let vm = null

	beforeEach(() => {
		vm = new Vue({
			store: new Vuex.Store({
				modules: {
					app
				}
			})
		})
	})

	describe('state should be prefilled', () => {
		it('should be an object', () => {
			expect(vm.$store.getters.options).to.be.an('object')
		})
	})
	describe('delay should return an average', () => {
		it('should return a int', () => {
			vm.$store.dispatch('addDelay', 600)
			expect(vm.$store.getters.loadingDuration).to.equal(700)
		})
	})
})

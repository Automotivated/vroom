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
			expect(vm.$store.getters.loadingDuration).to.be.an('number')
			expect(vm.$store.getters.loadingDuration).to.equal(700)
		})
		it('should return the average', () => {
			for (let i = 0; i < 10; i++) {
				vm.$store.dispatch('addDelay', 800)
			}
			expect(vm.$store.getters.loadingDuration).to.be.an('number')
			expect(vm.$store.getters.loadingDuration).to.equal(800)
		})
	})

	describe('options should be valid', () => {
		it('should return default options', () => {
			const options = vm.$store.getters.options
			expect(options).to.be.an('object')
			expect(options.overviewCount).to.be.an('number')
			expect(options.debounce).to.be.an('number')
			expect(options.availableFilters).to.be.an('array')
		})

		it('should overwrite the default options', () => {
			const options = vm.$store.getters.options
			vm.$store.dispatch('updateOptions', {
				overviewCount: 12
			})
			expect(options.overviewCount).to.equal(12)
		})
	})

	describe('options should be valid', () => {
		it('should update the default options', () => {
			const api = vm.$store.getters.api
			expect(api.endpoint).to.equal('https://engine.automotivated.nl/')
			vm.$store.dispatch('updateOptions', {
				api: {
					key: 'MySecretKey'
				}
			})
			expect(api.key).to.equal('MySecretKey')
			expect(api.endpoint).to.equal('https://engine.automotivated.nl/')
		})
	})

	describe('default app state should change', () => {
		it('should update loading', () => {
			expect(vm.$store.getters.loading).to.equal(false)
			vm.$store.dispatch('setLoading', true)
			expect(vm.$store.getters.loading).to.equal(true)
		})

		it('should update overview rendering', () => {
			const options = vm.$store.getters.options
			expect(options.overviewRendering).to.equal('grid')
			vm.$store.dispatch('setOverviewRendering', 'rows')
			expect(options.overviewRendering).to.equal('rows')
		})

		it('should update the overview count', () => {
			const options = vm.$store.getters.options
			expect(options.overviewCount).to.equal(12)
			vm.$store.dispatch('setOverviewCount', 50)
			expect(options.overviewCount).to.equal(50)
		})
	})
})

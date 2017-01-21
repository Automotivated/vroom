// Import Vue and the component being tested
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Loader from 'src/views/Loader'
import AppStore from 'src/store/modules/app/app'

describe('Loader', () => {
	let vm = null

	beforeEach(() => {
		vm = new Vue({
			el: document.createElement('div'),
			store: new Vuex.Store({
				modules: {
					app: {
						namespaced: true,
						state: {
							loader: {
								loading: false,
								delays: [800]
							}
						},
						getters: AppStore.getters
					}
				}
			}),
			render: (h) => h(Loader)
		})
	})

	it('sets the correct default data', () => {
		expect(vm.$store.getters['app/loading']).to.equal(false)
		expect(vm.$store.getters['app/loadingDelay']).to.equal(800)
	})
})

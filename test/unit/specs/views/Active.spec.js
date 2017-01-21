import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Active from 'src/views/Active'
import FiltersStore from 'src/store/modules/filters/filters'
import { body } from 'src/store/modules/filters/masterdata/body.js'

describe('Active.vue', () => {
	let vm = null

	beforeEach(() => {
		vm = new Vue({
			el: document.createElement('div'),
			store: new Vuex.Store({
				modules: {
					filters: {
						namespaced: true,
						state: {
							activeFilters: [{
								key: 'body',
								value: 'hatchback'
							}],
							filters: {
								[body.key]: body
							}
						},
						getters: FiltersStore.getters
					}
				}
			}),
			render: (h) => h(Active)
		})
	})

	it('should render correct contents', () => {
		expect(vm.$el.querySelector('.vrm-active-filters').childNodes.length).to.equal(1)
	})
})

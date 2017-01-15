import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Active from 'src/views/Active'
import { body } from 'src/store/modules/filters/masterdata/body.js'

describe('Active.vue', () => {
	it('should render correct contents', () => {
		const vm = new Vue({
			el: document.createElement('div'),
			render: (h) => h(Active),
			store: new Vuex.Store({
				modules: {
					filters: {
						namespaced: true,
						state: {
							filters: {
								[body.key]: body
							}
						},
						getters: {
							filteredActiveFilters: () => {
								return [{
									key: 'body',
									value: 'hatchback'
								}]
							}
						}
					}
				}
			})
		})
		expect(vm.$el.querySelector('.vrm-active-filters').childNodes.length).to.equal(1)
	})
})

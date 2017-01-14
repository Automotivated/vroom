import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Topbar from 'src/views/Topbar'

describe('Topbar.vue', () => {
	it('should render correct contents', () => {
		const vm = new Vue({
			el: document.createElement('div'),
			render: (h) => h(Topbar),
			store: new Vuex.Store({
				modules: {
					app: {
						namespaced: true
					},
					filters: {
						namespaced: true,
						getters: {
							filteredActiveFilters: () => {
								return [{}]
							}
						}
					}
				}
			})
		})
		expect(vm.$el.querySelector('.vrm-active').childNodes.length).to.equal(1)
	})
})

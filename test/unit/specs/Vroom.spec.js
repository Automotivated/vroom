import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Vroom from 'src/Vroom'
import store from 'src/store/store'

describe('Vroom.vue', () => {
	let vm = null

	beforeEach(() => {
		vm = new Vue({
			el: document.createElement('div'),
			store,
			render: (h) => h(Vroom)
		})
	})

	it('should create a Vroom div', () => {
		expect(vm.$el.classList[0]).to.equal('amv-vrm')
	})
})

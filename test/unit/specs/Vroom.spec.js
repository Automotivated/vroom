import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Vroom from 'src/Vroom'
import store from 'src/store/store'

describe('Vroom.vue', () => {
	it('should create a Vroom div', () => {
		const vm = new Vue({
			el: document.createElement('div'),
			store,
			render: (h) => h(Vroom)
		})
		expect(vm.$el.classList[0]).to.equal('amv-vrm')
	})
})

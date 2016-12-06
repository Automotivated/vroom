import Vue from 'vue'
import Vroom from 'src/Vroom'

describe('Vroom.vue', () => {
	it('should create a Vroom div', () => {
		const vm = new Vue({
			el: document.createElement('div'),
			render: (h) => h(Vroom)
		})
		expect(vm.$el.classList[0]).to.equal('vrm-app')
	})
})

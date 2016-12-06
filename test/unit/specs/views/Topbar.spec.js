import Vue from 'vue'
import Topbar from 'src/views/Topbar'

describe('Topbar.vue', () => {
	it('should render correct contents', () => {
		const vm = new Vue({
			el: document.createElement('div'),
			render: (h) => h(Topbar)
		})
		expect(vm.$el.querySelector('header h1').textContent)
			.to.equal('Booo!')
	})
})

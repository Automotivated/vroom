/**
 * SVG
 * This directive includes all svg and make them available via a directive
 */

// import scripts
import Vue from 'vue'

// import svg's
import glass from '../assets/svg/glass.svg'
import checked from '../assets/svg/checked.svg'
import chevron from '../assets/svg/chevron.svg'
import close from '../assets/svg/close.svg'
import sort from '../assets/svg/sort.svg'

const sprite = {
	'checked': checked,
	'glass': glass,
	'chevron': chevron,
	'close': close,
	'sort': sort
}

// Register a global custom directive called v-svg
Vue.directive('svg', {
	bind (el, binding) {
		if (binding.arg !== undefined && sprite[binding.arg] !== undefined) {
			el.innerHTML = sprite[binding.arg]
		} else {
			const error = document.createElement('span')
			error.innerText = 'err'
			el.appendChild(error)
		}
	}
})

import Ember from 'ember'

function trapFocus(event) {
	const modal = document.querySelector('[role="dialog"]')
	const main = document.querySelector('main')
	const dialogOpen = main.getAttribute('aria-hidden') === 'true'

	if (dialogOpen && !modal.contains(event.target)) {
		event.stopPropagation();
		modal.focus();
	}
}

export default Ember.Component.extend({
	classNames: ['Modal'],
	classNameBindings: ['model:is-open'],

	didInsertElement() {
		// Keep a reference to the currently focused element to be able to restore
		this.set('lastFocus', document.activeElement)

		// Set focus on an element inside the modal.
		const pagers = this.element.querySelectorAll('.Modal-pager')
		pagers[1].focus()

		// Hide main content AFTER moving focus
		const main = document.querySelector('main')
		main.setAttribute("aria-hidden", "true");

		// Trap focus
		document.addEventListener("focus", trapFocus, true)
	},

	willDestroyElement() {
		// Restore focus
		const main = document.querySelector('main')
		main.setAttribute("aria-hidden", "false");
		this.get('lastFocus').focus();

		// Remove events
		document.removeEventListener("focus", trapFocus, true)
	},

	actions: {
		close() {
			this.get('on-close')()
		}
	}
})

import Ember from 'ember'

const {Component, $} = Ember

export default Component.extend({
	didInsertElement() {
		this.enableShortcuts()
	},
	willDestroy() {
		this.disableShortcuts()
	},

	enableShortcuts() {
		$(document).on(`keydown.${this.id}`, event => {
			const key = event.key
			if (key === 'ArrowLeft') {
				this.attrs.left()
			}
			if (key === 'ArrowRight') {
				this.attrs.right()
			}
			if (key === 'Escape') {
				this.attrs.escape()
			}
		})
	},
	disableShortcuts() {
		$(document).off(`keydown.${this.id}`)
	}
})

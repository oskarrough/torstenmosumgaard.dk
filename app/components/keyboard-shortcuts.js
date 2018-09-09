import Component from '@ember/component';
import $ from 'jquery';

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
				this.left()
			}
			if (key === 'ArrowRight') {
				this.right()
			}
			if (key === 'Escape') {
				this.escape()
			}
		})
	},
	disableShortcuts() {
		$(document).off(`keydown.${this.id}`)
	}
})

import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { get, computed } from '@ember/object';

export default Controller.extend({
	store: service(),

	previousPhoto: computed('model.id', function() {
		return this.goTo(-1).id
	}),
	nextPhoto: computed('model.id', function() {
		return this.goTo(1).id
	}),

	goTo(steps = 1) {
		const photos = get(this, 'store.photos')
		const model = get(this, 'model')
		const currentIndex = photos.indexOf(model)
		let photo = photos.objectAt(currentIndex + steps)
		if (!photo) {
			if (steps > 0) {
				photo = photos.get('firstObject')
			} else {
				photo = photos.get('lastObject')
			}
		}
		return photo
	},

	actions: {
		goBack() {
			this.transitionToRoute('application')
		},
		next() {
			this.transitionToRoute('photo', this.goTo(1))
		},
		previous() {
			this.transitionToRoute('photo', this.goTo(-1))
		}
	}
})

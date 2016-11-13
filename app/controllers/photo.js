import Ember from 'ember';

const {Controller, computed, get, set, inject} = Ember;

export default Controller.extend({
  store: inject.service(),

  previousPhoto: computed('model.public_id', function () {
    return this.goTo(-1).public_id;
  }),
  nextPhoto: computed('model.public_id', function () {
    return this.goTo(1).public_id;
  }),

  goTo(steps = 1) {
    const photos = get(this, 'store.photos');
    const model = get(this, 'model');
    const currentIndex = photos.indexOf(model);
    const photo = photos.objectAt(currentIndex + steps);
    return photo;
  },

  actions: {
    goBack() {
      this.transitionToRoute('application');
    },
    next() {
      this.goTo(1);
    },
    previous() {
      this.goTo(-1);
    }
  }
});

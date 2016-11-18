import Ember from 'ember';

const {Controller, computed, get, inject} = Ember;

export default Controller.extend({
  store: inject.service(),

  previousPhoto: computed('model.id', function () {
    return this.goTo(-1).id;
  }),
  nextPhoto: computed('model.id', function () {
    return this.goTo(1).id;
  }),

  goTo(steps = 1) {
    const photos = get(this, 'store.photos');
    const model = get(this, 'model');
    const currentIndex = photos.indexOf(model);
    let photo = photos.objectAt(currentIndex + steps);
    if (!photo) {
      if (steps > 0) {
        photo = photos.get('firstObject');
      } else {
        photo = photos.get('lastObject');
      }
    }
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

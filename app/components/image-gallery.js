import Ember from 'ember';

const {Component, get, set} = Ember;

export default Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);
    // If there is an id, open the modal.
    const id = get(this, 'selectedImageId');
    if (id) {
      const img = get(this, 'images').filterBy('public_id', id)[0];
      this.setImage(img);
    }
  },

  setImage(img) {
    set(this, 'selectedImage', img);
    set(this, 'selectedImageId', img.public_id);
  },

  actions: {
    open(img) {
      this.setImage(img);
    },
    close() {
      set(this, 'selectedImage', '');
      set(this, 'selectedImageId', '');
    },
    next() {
      const index = get(this, 'images').indexOf(get(this, 'selectedImage'));
      this.setImage(get(this, 'images').objectAt(index + 1));
    },
    previous() {
      const index = get(this, 'images').indexOf(get(this, 'selectedImage'));
      this.setImage(get(this, 'images').objectAt(index - 1));
    }
  }
});

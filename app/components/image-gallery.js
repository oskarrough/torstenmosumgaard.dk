import Ember from 'ember';

const {Component, get, set} = Ember;

export default Component.extend({
  tagName: 'section',
  // images

  actions: {
    open(img) {
      set(this, 'selectedImage', img);
    },
    close() {
      set(this, 'selectedImage', '');
    },
    next() {
      const index = get(this, 'images').indexOf(get(this, 'selectedImage'));
      console.log(index);
      set(this, 'selectedImage', get(this, 'images').objectAt(index + 1));
    },
    previous() {
      const index = get(this, 'images').indexOf(get(this, 'selectedImage'));
      console.log(index);
      set(this, 'selectedImage', get(this, 'images').objectAt(index - 1));
    }
  }
});

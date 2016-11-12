import Ember from 'ember';

const {Component, set} = Ember;

export default Component.extend({
  tagName: 'section',

  actions: {
    open(img) {
      set(this, 'selectedImage', img);
    },
    close() {
      set(this, 'selectedImage', '');
    }
  }
});

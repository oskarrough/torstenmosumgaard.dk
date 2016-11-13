import Ember from 'ember';

const {Component, get, set} = Ember;

export default Component.extend({
  // images
  // currentImage
  // currentImageId

  didInsertElement() {
    this._super(...arguments);
    // If there is an id, open the modal.
    const id = get(this, 'currentImageId');
    const images = get(this, 'images');
    if (id && images) {
      const img = images.filterBy('public_id', id)[0];
      this.send('open', img);
    }
  },

  goTo(steps = 1) {
    const images = get(this, 'images');
    const currentImage = get(this, 'currentImage');
    const currentIndex = images.indexOf(currentImage);
    const image = images.objectAt(currentIndex + steps);
    this.send('open', image);
  },

  actions: {
    open(img) {
      this.setProperties({
        currentImageId: img.public_id,
        currentImage: img
      });
    },
    close() {
      set(this, 'currentImage', '');
      set(this, 'currentImageId', '');
    },
    next() {
      this.goTo(1);
    },
    previous() {
      this.goTo(-1);
    }
  }
});

// keydownMap: {
//   // 8:  'startBackspacing', // backspace
//   27: 'closeModal', // escape
//   38: 'previous', // up key
//   40: 'next', // down key
// },

// handleKeydown: Ember.on('keyDown', function(event) {
//   const map = this.get('keydownMap');
//   const code = event.keyCode;
//   const method = map[code];
//   console.log(code);
//   if (method) {
//     // return this[method](event);
//     return this.send(method);
//   }
// }),

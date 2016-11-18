import Ember from 'ember';

const {Component, run} = Ember;

export default Component.extend({
  tagName: 'section',
  classNames: ['Grid'],

  didInsertElement() {
    run.scheduleOnce('afterRender', this, this.preloadImages);
  },

  preloadImages(amount = 3) {
    let images = this.element.querySelectorAll('.lazyload');
    let firstThree = Array.from(images).slice(0,amount);
    firstThree.forEach(img => img.classList.add('lazypreload'));
  }

  // classNameBindings: ['isModalOpen:Grid--row'],
  // isModalOpen: Ember.computed.equal('currentRouteName', 'photo')

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
});


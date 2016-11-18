import Ember from 'ember';

const {Component} = Ember;

export default Component.extend({
  tagName: 'section',
  classNames: ['Grid']
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


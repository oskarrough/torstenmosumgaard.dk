import {moduleForComponent, test} from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('image-gallery', 'Integration | Component | image gallery', {
	integration: true
})

test('it renders', function(assert) {
	this.set('items', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

	// Template block usage:
	this.render(
		hbs`
    {{#image-gallery items=items as |item|}}
      <i>{{item}}</i>
    {{/image-gallery}}
  `
	)

	var allItems = this.$('i')
		.text()
		.trim()
	// there is a very low chance this this might fail
	assert.notEqual(allItems, '12345678910')
})

import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('modal-dialog', 'Integration | Component | modal dialog', {
	integration: true
})

test('it renders', function(assert) {
	// Template block usage:
	this.render(
		hbs`
    {{#modal-dialog}}
      template block text
    {{/modal-dialog}}
  `
	)

	assert.equal(
		this.$('.Modal-inner')
			.text()
			.trim(),
		'template block text'
	)
})

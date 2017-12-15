import {moduleForComponent, test} from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent(
	'keyboard-shortcuts',
	'Integration | Component | keyboard shortcuts',
	{
		integration: true
	}
)

test('it renders', function(assert) {
	// Set any properties with this.set('myProperty', 'value');
	// Handle any actions with this.on('myAction', function(val) { ... });

	this.render(hbs`{{keyboard-shortcuts}}`)

	assert.equal(
		this.$()
			.text()
			.trim(),
		''
	)

	// Template block usage:
	this.render(
		hbs`
    {{#keyboard-shortcuts}}
      template block text
    {{/keyboard-shortcuts}}
  `
	)

	assert.equal(
		this.$()
			.text()
			.trim(),
		'template block text'
	)
})

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-img', 'Integration | Component | x img', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  const exampleData = {"id":"sample","format":"jpg","version":1478980184,"resource_type":"image","type":"upload","created_at":"2016-11-12T19:49:44Z","bytes":109669,"width":864,"height":576,"url":"http://res.cloudinary.com/torstenmosumgaard/image/upload/v1478980184/sample.jpg","secure_url":"https://res.cloudinary.com/torstenmosumgaard/image/upload/v1478980184/sample.jpg"};
  this.set('img', exampleData);

  this.render(hbs`{{x-img img=img}}`);
  assert.equal(this.$().text().trim(), '');

  // // Template block usage:
  // this.render(hbs`
  //   {{#x-img}}
  //     template block text
  //   {{/x-img}}
  // `);
  // assert.equal(this.$().text().trim(), 'template block text');
});

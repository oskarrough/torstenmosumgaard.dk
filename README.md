# Torsten Mosumgaard Gallery

This is the source code for the website on https://torstenmosumgaard.dk.

![screenshot](./screenshot.png)

## Highlights

- Images are fetched from a Cloudinary account using https://github.com/oskarrough/cloudinary-endpoint
- Decent performance
- Modal gallery with URLs
- Keyboard shortcuts (you can tab around or use arrow keys)
- Made with Ember.js

## Development

Make sure you have the following installed:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm or yarn)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/) (for running the tests)

…then do:

* `git clone git@github.com:oskarrough/torstenmosumgaard-gallery.git`
* `cd torstenmosumgaard-gallery`
* `yarn`

### Local server

Run `yarn start` to start a development server on [http://localhost:4200](http://localhost:4200).

### Running Tests

* `yarn test` (runs once)
* `ember test --server` (visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests))

You can format all scripts using `yarn prettier`. It's a good idea to run this before committing.

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `yarn build` (production)

### Deploying

The master branch is automatically deployed via netlify.com to https://torstenmosumgaard.dk.

## Mini version

While Ember.js makes it a pleasure to develop small things like this, it is a bit too heavy. If all you want it is a gallery check the `mini-version` folder in this repo.


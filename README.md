# Torsten Mosumgaard Gallery

This is the website on https://torstenmosumgaard.dk.

It's one big gallery made with Ember.js. All images are fetched live from a Cloudinary account using https://github.com/oskarrough/cloudinary-endpoint

You can format all scripts using `yarn prettier`. It's a good idea to run this before committing.

## Prerequisites

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd torstenmosumgaard-gallery`
* `yarn`

## Running / Development

* `yarn start`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

The master branch is automatically deployed via netlify.com to https://torstenmosumgaard.dk.

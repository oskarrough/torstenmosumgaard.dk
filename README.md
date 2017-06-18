# Torsten Mosumgaard Gallery

This is an Ember.js application that renders a gallery from a Cloudinary.com instance. It is connected with a simple node API to extract the images: https://gitlab.com/oskarrough/torstenmosumgaard-api.

You can format all scripts using `yarn format`. It's a good idea to run this before committing.

## Prerequisites

You will need [Git](https://git-scm.com/), [Node.js](https://nodejs.org/) (with NPM or Yarn) and [Ember CLI](https://ember-cli.com/).

## Installation

* `git clone <repository-url>` this repository
* `cd torstenmosumgaard-gallery`
* `yarn`

## Running / Development

* `yarn start`
* Visit your app at [http://localhost:4200](http://localhost:4200).

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

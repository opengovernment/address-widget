# Address Widget

This is the basis for a third party widget for AskThem.io, it will be
distributed via jQuery loader and multiple instances of the Ember app will be
able to run on a page.

It is an Ember.js app that allows users to look up their elected officials and
ask a question on AskThem.io

This README outlines the details of collaborating on this Ember application.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url> address` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200) or if you are
  like me, set up pow for that port and visit the appropriate pow URL.

In development and testing the app relies on having a local copy of askthem.io
running at askthem.dev, YOU'LL NEED TO CHANGE config/environment.js a bit to
get it working without it. Here's how:

    ENV.APP.askThemHost = 'askthem.dev' # under development/test change to 'www.askthem.io'

This app takes meta tag declared options, using ember-cli-meta-options, to
configure the app. See notes under deployment about configuration.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

During a production build, I have added an additional step using
ember-cli-make-concoction that creates an "app template" that the jQuery loader
will then instantiate with a unique Ember app modulePrefix, etc. This the trick
that allows multiple instances of the widget to run on a host page.

This can safely be ignored unless you are specifically using it with the jQuery
loader.

### Deploying

In the case of AskThem.io, this is a manual process right now. I'll write a post
about it at some point.

Otherwise the deployment should be fairly standard. Just remember to set up
your configuration via meta tags on the host page. See app/index.html and
tests/index.html for example configuration.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Credits

Originally developed by [Walter Mcginnis](https://github.com/walter).

This ember-cli add-on was built as a part of widget work for http://askthem.io.

Thanks to the Ember.js, ember-cli, and Broccoli teams for excellent work.

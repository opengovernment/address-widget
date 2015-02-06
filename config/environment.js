/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'address',
    environment: environment,
    locationType: 'none',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' http://ember.dev:35729/",
      'font-src': "'self'",
      'connect-src': "'self' http://www.askthem.io/ http://askthem.dev/ ws://ember.dev:35729/",
      'img-src': "'self' http://d2xfsikitl0nz3.cloudfront.net/ http://www.askthem.io/ http://askthem.dev/",
      'style-src': "'self'",
      'media-src': "'self'"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
        'ember-htmlbars': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      rootElement: '#address-container'
    },
    // configuration for options initializer
    optionsConfig: {
      // use defaults
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
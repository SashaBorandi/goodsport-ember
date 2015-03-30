/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'brackety-ember',
    environment: environment,
    baseURL: '/',
    apiNamespace: 'api/v1',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'simple-auth': {
      authorizer: 'simple-auth-authorizer:token'
    },

    'simple-auth-token': {
      identificationField: 'email',
      refreshLeeway: 600, // refresh 10 minutes before expiry
      timeFactor: 1000  // convert incoming seconds to milliseconds.
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.apiHost = 'http://localhost:3000';
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

  ENV.contentSecurityPolicy = {
    'connect-src': "'self' " + ENV.apiHost
  };

  ENV['simple-auth'].crossOriginWhitelist = [ENV.apiHost];

  api = ENV.apiHost + '/' + ENV.apiNamespace;
  ENV['simple-auth-token'].serverTokenEndpoint = api + '/auth';
  ENV['simple-auth-token'].serverTokenRefreshEndpoint = api + '/auth/refresh';

  return ENV;
};

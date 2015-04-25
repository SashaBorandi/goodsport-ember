/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'brackety-ember',
    environment: environment,
    baseURL: '/',
    apiHost: process.env.API_HOST || 'http://localhost:3000',
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

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' https://maxcdn.bootstrapcdn.com",
      'connect-src': "'self'",
      'img-src': "'self'",
      'style-src': "'self' https://maxcdn.bootstrapcdn.com",
      'media-src': "'self'"
    },

    'simple-auth': {
      session: 'session:user',
      authorizer: 'simple-auth-authorizer:token'
    },

    'simple-auth-token': {
      identificationField: 'email',
      refreshLeeway: 600, // refresh 10 minutes before expiry
      timeFactor: 1000  // convert incoming seconds to milliseconds.
    }
  };

  var api = ENV.apiHost + '/' + ENV.apiNamespace;
  ENV['simple-auth'].crossOriginWhitelist = [ENV.apiHost];
  ENV['simple-auth-token'].serverTokenEndpoint = api + '/auth';
  ENV['simple-auth-token'].serverTokenRefreshEndpoint = api + '/auth/refresh';

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.contentSecurityPolicy['connect-src'] = '*';
    ENV.contentSecurityPolicy['script-src'] = '*';
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

import DS from 'ember-data';
import config from '../config/environment';

// Switch to JSON-API when it is ready
export default DS.ActiveModelAdapter.extend({
  host: config.apiHost,
  namespace: config.apiNamespace
});

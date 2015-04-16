import DS from 'ember-data';
import config from '../config/environment';

export default DS.ActiveModelAdapter.extend({
  host: 'localhost',
  namespace: config.apiNamespace
});

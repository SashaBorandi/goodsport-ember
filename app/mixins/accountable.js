import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Mixin.create({
  account: DS.belongsTo('account', { async: true }),

  requestedUsername: DS.attr('string')
});

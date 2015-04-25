import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.belongsTo('accountable', { polymorphic: true }),
  competitions: DS.hasMany('competition', { async: true }),

  username: DS.attr('string')
});

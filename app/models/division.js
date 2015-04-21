import DS from 'ember-data';

export default DS.Model.extend({
  competition: DS.belongsTo('competition'),
  participants: DS.hasMany('user'),
  matches: DS.hasMany('match'),
  slug: DS.attr('string')
});

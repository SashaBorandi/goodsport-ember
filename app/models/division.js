import DS from 'ember-data';
import Sluggable from '../mixins/sluggable';

export default DS.Model.extend(Sluggable, {
  competition: DS.belongsTo('competition'),
  participants: DS.hasMany('user'),
  matches: DS.hasMany('match'),

  title: DS.attr('string')
});

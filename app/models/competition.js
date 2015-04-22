import DS from 'ember-data';
import Sluggable from '../mixins/sluggable';

var Competition = DS.Model.extend(Sluggable, {
  account: DS.belongsTo('account'),
  divisions: DS.hasMany('division'),

  title: DS.attr('string'),
  type: DS.attr('string')
});

Competition.reopenClass({
  FIXTURES: [
    {
      id: 'hinshun.championship',
      account: 'hinshun',
      divisions: [],
      title: 'Compete for days',
      type: 'tournament'
    },
    {
      id: 'hinshun.all-your-base',
      account: 'hinshun',
      divisions: [],
      title: 'All your base belongs to me',
      type: 'league'
    }
  ]
});

export default Competition;

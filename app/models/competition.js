import DS from 'ember-data';
import Sluggable from '../mixins/sluggable';

var Competition = DS.Model.extend(Sluggable, {
  account: DS.belongsTo('account'),
  divisions: DS.hasMany('division')
});

Competition.reopenClass({
  FIXTURES: [
    {
      id: 'hinshun.championship',
      account: 'hinshun'
    }
  ]
});

export default Competition;

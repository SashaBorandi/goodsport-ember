import DS from 'ember-data';
import Accountable from '../mixins/accountable';

var Organization = DS.Model.extend(Accountable, {
  organizers: DS.hasMany('organizer'),
  members: DS.hasMany('user'),
  name: DS.attr('string')
});

Organization.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'utbc'
    }
  ]
});

export default Organization;

import DS from 'ember-data';
import Accountable from '../mixins/accountable';

var Organization = DS.Model.extend(Accountable, {
  memberships: DS.hasMany('membership'),
});

Organization.reopenClass({
  FIXTURES: [
    {
      id: 1,
      memberships: []
    }
  ]
});

export default Organization;

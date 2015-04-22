import DS from 'ember-data';
import Accountable from '../mixins/accountable';

var Organization = DS.Model.extend(Accountable, {
  memberships: DS.hasMany('membership'),

  title: DS.attr('string')
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

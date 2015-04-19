import DS from 'ember-data';
import Accountable from '../models/accountable';

var Organization = Accountable.extend({
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

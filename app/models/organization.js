import DS from 'ember-data';
import Accountable from '../mixins/accountable';

var Organization = DS.Model.extend(Accountable, {
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

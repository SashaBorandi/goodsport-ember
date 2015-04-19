import Ember from 'ember';
import AccountableMixin from '../../../mixins/accountable';
import { module, test } from 'qunit';

module('AccountableMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var AccountableObject = Ember.Object.extend(AccountableMixin);
  var subject = AccountableObject.create();
  assert.ok(subject);
});

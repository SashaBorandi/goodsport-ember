import Ember from 'ember';
import SluggableMixin from '../../../mixins/sluggable';
import { module, test } from 'qunit';

module('SluggableMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var SluggableObject = Ember.Object.extend(SluggableMixin);
  var subject = SluggableObject.create();
  assert.ok(subject);
});

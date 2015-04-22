import Ember from 'ember';
import SluggableMixin from '../../../mixins/sluggable';
import { module, test } from 'qunit';

module('SluggableMixin');

test('it returns the id', function(assert) {
  var SluggableObject = Ember.Object.extend(SluggableMixin);
  var subject = SluggableObject.create({id: 'slug'});
  assert.ok(subject.get('id') === subject.get('slug'));
});

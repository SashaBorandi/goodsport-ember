import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('competition', {
  // Specify the other units that are required for this test.
  needs: [
    'model:account',
    'mixin:accountable',
    'model:user',
    'model:event',
    'model:match'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('account', {
  // Specify the other units that are required for this test.
  needs: [
    'mixin:accountable',
    'model:competition',
    'model:event'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

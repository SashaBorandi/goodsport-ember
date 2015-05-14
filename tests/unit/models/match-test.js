import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('match', {
  // Specify the other units that are required for this test.
  needs: [
    'model:user',
    'model:competition',
    'model:event'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

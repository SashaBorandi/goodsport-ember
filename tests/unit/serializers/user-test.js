import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('user', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:user',
    'mixin:accountable',
    'model:account',
    'model:organization',
    'model:competition',
    'model:membership'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

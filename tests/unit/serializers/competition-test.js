import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('competition', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:competition',
    'model:account',
    'mixin:accountable',
    'model:user',
    'model:division',
    'model:match'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('account', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:account',
    'mixin:accountable',
    'model:competition',
    'model:division'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
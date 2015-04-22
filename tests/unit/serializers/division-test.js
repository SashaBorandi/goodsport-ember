import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('division', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:division',
    'model:organization',
    'model:competition',
    'model:account',
    'model:user',
    'model:match'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

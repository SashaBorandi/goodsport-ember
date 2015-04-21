import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('organizer', {
  // Specify the other units that are required for this test.
  needs: [
    'model:account',
    'model:user',
    'model:organization'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

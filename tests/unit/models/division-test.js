import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('division', {
  // Specify the other units that are required for this test.
  needs: [
    'model:organization',
    'model:competition',
    'model:account',
    'model:user',
    'model:match'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

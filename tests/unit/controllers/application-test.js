import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it has a default address value of null', function(assert) {
  var controller = this.subject();

  var result = controller.get('address');

  assert.equal(result, null);
});

test('it takes an address', function(assert) {
  var value = '05602';

  var controller = this.subject({
    address: value
  });

  var result = controller.get('address');

  assert.equal(result, value);
});

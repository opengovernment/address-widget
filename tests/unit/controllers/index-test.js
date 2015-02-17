import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: ['controller:application']
});

// Replace this with your real tests.
test('it has same address as application controller', function(assert) {
  var controller = this.subject(),
      applicationController = controller.get('controllers.application');

  applicationController.set('address', '05602');

  assert.equal(controller.get('address'), applicationController.get('address'));
});

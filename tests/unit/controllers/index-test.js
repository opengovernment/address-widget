import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:index', {
  needs: ['controller:application']
});

test('it has same address as application controller', function(assert) {
  var controller = this.subject(),
      applicationController = controller.get('controllers.application');

  applicationController.set('address', '05602');

  assert.equal(controller.get('address'), applicationController.get('address'));
});

import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:people/index', {
  needs: ['controller:application']
});

// test('model returns array of people', function(assert) {
//   var route = this.subject(),
//       applicationController = route.controllerFor('application');

//   applicationController.set('address', '05602');

//   route.get('model').then(
//     function(result) {
//       assert.equal(result, {});
//     }
//   );
// });

// import Ember from 'ember';

import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:people/index', {
  needs: ['controller:application']
});

// TODO: pending, need advice on on how to test this!!!
//
// test('model returns array of people', function(assert) {
//   var route = this.subject(),
//       applicationController = route.controllerFor('application');

//   applicationController.set('address', '05602');

//   Ember.run(function() {
//     assert.equal(route.send('model'), {});
//   });
// });

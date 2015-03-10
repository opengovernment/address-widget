import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:questions/new', {
  needs: ['controller:people', 'controller:application']
});

test('it has same selectedPerson as people controller', function(assert) {
  var controller = this.subject(),
      peopleController = controller.get('controllers.people'),
      person = { 'full_name': 'Bernard Sanders' };

  peopleController.set('selectedPerson', person);

  assert.equal(controller.get('selectedPerson'),
               peopleController.get('selectedPerson'));
});

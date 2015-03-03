import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:questions/new', {
  needs: ['controller:people']
});

var person = { 'full_name': 'Bernard Sanders' };

test('it has same selectedPerson as people controller', function(assert) {
  var controller = this.subject(),
      peopleController = controller.get('controllers.people');

  peopleController.set('selectedPerson', person);

  assert.equal(controller.get('selectedPerson'),
               peopleController.get('selectedPerson'));
});

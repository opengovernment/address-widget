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

test('titleIsValid checks title is present and has atleast three chars',
     function(assert) {

  var controller = this.subject({ model: { title: null,
                                           user: { email: null } } }),
                   result;

  result = controller.get('titleIsValid');

  assert.equal(result, false);

  controller.set('model.title', 'XYZ');

  result = controller.get('titleIsValid');

  assert.equal(result, true);
});

test('emailIsValid checks user.email is present and has correct format',
     function(assert) {

  var controller = this.subject({ model: { title: null,
                                           user: { email: null } } }),
                   result;

  result = controller.get('emailIsValid');

  assert.equal(result, false);

  controller.set('model.user.email', 'XYZ');

  result = controller.get('emailIsValid');

  assert.equal(result, false);

  controller.set('model.user.email', 'bob.dobbs@example.com');

  result = controller.get('emailIsValid');

  assert.equal(result, true);
});

test('isValid checks that both title and user.email are valid',
     function(assert) {

  var controller = this.subject({ model: { title: null,
                                           user: { email: null } } }),
                   result;

  result = controller.get('isValid');

  assert.equal(result, false);

  controller.set('model.title', 'XYZ');
  controller.set('model.user.email', 'bob.dobbs@example.com');

  result = controller.get('isValid');

  assert.equal(result, true);
});

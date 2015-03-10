import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:questions/new', {
  needs: ['controller:application',
          'controller:people',
          'controller:questions.new']
});

test('format sanitizes and strips extra spaces', function(assert) {
  var route = this.subject(),
      unformatted = 'Full     of    extra    spaces!',
      expected = 'Full of extra spaces!';

  assert.equal(route.format(unformatted), expected);
});

test('save submits question and takes user to thanks route',
     function(assert) {

  var route = this.subject(),
      applicationController = route.controllerFor('application'),
      peopleController = route.controllerFor('people'),
      newController = route.controllerFor('questions.new'),
      model,
      didPost,
      didTransition;

  setUpApplicationController(applicationController);

  setUpPeopleController(peopleController);

  newController.set('email', 'test_user@example.com');

  model = { title: applicationController.get('attrs.question.summary'),
            body: applicationController.get('attrs.question.body') };

  newController.set('model', model);

  var payLoad = preparePayload(applicationController,
                               peopleController,
                               newController,
                               model);

  // mock apijax as apijax won't work in context of test
  route.apijax = {
    POST: function(path, params) {
      didPost = true;
      assert.equal(JSON.stringify(params), JSON.stringify(payLoad),
                 'expected data to be properly formed');

    }
  };

  // http://discuss.emberjs.com/t/test-isolation-aka-how-wrong-am-i-doing-it/7162/2
  route.transitionTo = function mockTransitionTo(route) {
    didTransition = true;
    assert.equal(route, 'thanks',
                 'expected transitionTo people');
  };

  route.send('save');

  assert.ok(didPost, 'expected to post data');
  assert.ok(didTransition, 'expected to transition');
});

function setUpApplicationController(controller) {
  controller.set('address', '05602');
  controller.set('attrs', {
    question: {
      summary: 'summary',
      body: 'body'
    },
    partner: {
      name: 'partner',
      url: 'http://example.com',
      logo: 'http://example.com/logo.png'
    }
  });
}

function setUpPeopleController(controller) {
  controller.set('selectedPerson', {
    id: '1',
    full_name: 'Bernard Sanders'
  });
}

function preparePayload(applicationController,
                        peopleController,
                        newController,
                        model) {
  var fullQuestion = model,
      fullPartner = applicationController.get('attrs.partner');

  fullQuestion.user = {
    email: newController.get('email')
  };

  fullQuestion.person_id = peopleController.get('selectedPerson.id');

  fullPartner.submitted_address = applicationController.get('address');

  return { question: fullQuestion, partner: fullPartner };
}

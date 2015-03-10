import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:people', {
  needs: ['controller:application']
});

test('renderTemplate sets application.duringQuestionSteps to true',
     function(assert) {
  var route = this.subject(),
      applicationController = route.controllerFor('application'),
      didRender;

  // http://discuss.emberjs.com/t/test-isolation-aka-how-wrong-am-i-doing-it/7162/2
  route.render = function mockRender(route) {
    didRender = true;
  };

  route.renderTemplate();

  assert.equal(applicationController.get('duringQuestionSteps'), true);
  assert.ok(didRender, 'expected to render');
});

test('personSelect takes user to questions.new', function(assert) {
  var route = this.subject(),
      didTransition;

  // http://discuss.emberjs.com/t/test-isolation-aka-how-wrong-am-i-doing-it/7162/2
  route.transitionTo = function mockTransitionTo(route) {
    didTransition = true;
    assert.equal(route, 'questions.new',
                 'expected transitionTo questions.new');
  };

  route.send('personSelect');

  assert.ok(didTransition, 'expected to transition');
});

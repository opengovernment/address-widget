import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:index', {
});

test('search takes user to people route', function(assert) {
  var route = this.subject(),
      didTransition;

  // http://discuss.emberjs.com/t/test-isolation-aka-how-wrong-am-i-doing-it/7162/2
  route.transitionTo = function mockTransitionTo(route) {
    didTransition = true;
    assert.equal(route, 'people',
                 'expected transitionTo people');
  };

  route.send('search');

  assert.ok(didTransition, 'expected to transition');
});

import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Thanks', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('when process is finished, user is thanked', function(assert) {
  visit('/');

  fillIn('input[placeholder="Zip Code"]', '05602');

  click('.sign');

  click('li.person:first');

  fillIn('input.email-input', 'test_user@example.com');

  click('input[type="submit"]');

  andThen(function() {
    var copy = "We'll deliver this question publicly and ask\n  Bernard Sanders to respond.";
    assert.equal(find('.copy').first().text(), copy);
  });
});
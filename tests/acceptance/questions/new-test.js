import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../helpers/start-app';

var application;

module('Acceptance: Questions.new', {
  beforeEach: function() {
    application = startApp();
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('when recipient is chosen, question and email form appears', function(assert) {
  visit('/');

  fillIn('input[placeholder="Zip Code"]', '05602');

  click('.sign');

  click('li.person:first');

  andThen(function() {
    assert.equal(find('textarea.summary-input').first().val(),
                 'QUESTION_SUMMARY');
    assert.equal(find('textarea.body-input').first().val(),
                 'QUESTION_BODY');
    assert.equal(find('input.email-input').first().val(),
                 '');
  });
});

test('when question and email form is filled out, user is thanked', function(assert) {
  visit('/');

  fillIn('input[placeholder="Zip Code"]', '05602');

  click('.sign');

  click('li.person:first');

  fillIn('input.email-input', 'test_user@example.com');

  click('input[type="submit"]');

  andThen(function() {
    assert.equal(currentPath(), 'thanks');
  });
});

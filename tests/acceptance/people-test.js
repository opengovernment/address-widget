import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: People', {
  beforeEach: function() {
    application = startApp();
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('when address submitted, people are listed', function(assert) {
  visit('/');

  fillIn('input.address-field', '05602');

  click('.sign');

  andThen(function() {
    assert.equal(currentPath(), 'people.index');
    assert.equal(find('span.jurisdiction').first().text(),
                 'United States Senate, Vermont, Independent\n');
  });
});

test('when a person is selected as recipient', function(assert) {
  visit('/');

  fillIn('input.address-field', '05602');

  click('.sign');

  click('.person:first');

  andThen(function() {
    assert.equal(currentPath(), 'questions.new');
    assert.equal(find('.content-person-name').text(), 'Bernard Sanders');
  });
});

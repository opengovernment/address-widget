import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: AddressForm', {
  beforeEach: function() {
    application = startApp();
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting / should show populated addess form and headline from options', function(assert) {
  visit('/');

  andThen(function() {
    assert.ok(findWithAssert('input[placeholder="Zip Code"]'));
    assert.equal(find('h4').text(), 'HEADLINE!');
  });
});

test('filling out addess form and submitting it should take you to matching people', function(assert) {
  visit('/');

  fillIn('input[placeholder="Zip Code"]', '05602');

  click('.sign');

  andThen(function() {
    assert.equal(currentPath(), 'people.index');
  });
});

import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: AddressForm', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting / should show populated addess form from options', function() {
  visit('/');

  andThen(function() {
    // expect headline to match options.headline

    // expect question summary to match options.question.summary

    // expect hidden fields to be set

    // expect address search form
    ok(findWithAssert('input[placeholder="Zip Code"]'));
  });
});

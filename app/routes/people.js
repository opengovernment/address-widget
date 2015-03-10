import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.controllerFor('application').set('duringQuestionSteps', true);

    this.render({ into: 'application', outlet: 'question-steps' });
  },
  actions: {
    personSelect: function() {
      this.transitionTo('questions.new');

      return false;
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    personSelect: function() {
      this.transitionTo('questions.new');

      return false;
    }
  }
});

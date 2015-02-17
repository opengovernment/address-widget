import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    search: function() {
      this.transitionTo('people');

      return true;
    }
  }
});

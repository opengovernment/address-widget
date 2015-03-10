import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    backToStart: function() {
      this.controllerFor('application').set('address', null);

      this.transitionTo('application');

      return false;
    }
  }
});

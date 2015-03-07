import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var address = this.controllerFor('application').get('address');
    return this.apijax.GET('/locator.json', { 'q': address });
  }
});

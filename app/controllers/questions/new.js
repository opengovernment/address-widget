import Ember from 'ember';

// TODO: check validity using ember-validations addon
export default Ember.Controller.extend({
  needs: ['people', 'application'],
  selectedPerson: Ember.computed.alias('controllers.people.selectedPerson'),
  email: null
});

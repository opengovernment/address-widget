import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'people',
  selectedPerson: Ember.computed.alias('controllers.people.selectedPerson'),
  actions: {
    personSelect: function(person) {
      this.set('selectedPerson', person);

      return true;
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      var question = this.controllerFor('application').get('attrs.question');
      question.title = question.summary;
      question.user = {
        email: this.controllerFor('questions.new').get('email')
      };
      question.originating_url = document.URL;

      var person = this.controllerFor('people').get('selectedPerson');
      question.person_id = person.id;

      var address = this.controllerFor('application').get('address');

      var partner = this.controllerFor('application').get('attrs.partner');
      partner.submitted_address = address;

      var payLoad = {
        question: question,
        partner: partner
      };

      this.apijax.POST('us/questions.json', payLoad);

      this.transitionTo('thanks');

      return false;
    }
  }
});

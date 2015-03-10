import Ember from 'ember';
import { sanitize } from 'ember-sanitize/utils/sanitize';

export default Ember.Route.extend({
  model: function() {
    var title = this.controllerFor('application').get('attrs.question.summary'),
        body = this.controllerFor('application').get('attrs.question.body');

    return { title: this.format(title),
             body: this.format(body),
             originating_url: document.URL,
             user: {}
           };
  },
  format: function(string) {
    string = sanitize(string);
    return string.replace(/\s+/g,' ').trim();
  },
  actions: {
    save: function() {
      var question = this.controllerFor('questions.new').get('model');

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

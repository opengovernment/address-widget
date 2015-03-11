import Ember from 'ember';
import { sanitize } from 'ember-sanitize/utils/sanitize';
import Question from 'address/models/question';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render({ into: 'application', outlet: 'question-steps' });
  },
  model: function() {
    var title = this.controllerFor('application').get('attrs.question.summary'),
        body = this.controllerFor('application').get('attrs.question.body');

    return Question.create({ title: this.format(title),
                             body: this.format(body),
                             originating_url: document.URL,
                             user: { email: null }
                           });
  },
  format: function(string) {
    string = sanitize(string);
    return string.replace(/\s+/g,' ').trim();
  },
  actions: {
    save: function() {
      if (this.controllerFor('questions.new').get('isValid')) {
        this.set('errorMessage', null);

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
      } else {
        this.controllerFor('questions.new').set('errorMessage',
                 'Question summary and your email must be filled out. Email must be valid.');
      }

      return false;
    }
  }
});

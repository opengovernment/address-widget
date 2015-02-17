import Ember from 'ember';

export default Ember.Component.extend({
  person: null,
  details: function() {
    var details = [],
        person = this.get('person');

    if (person.policital_position_title !== '') {
      details.push(person.political_position_title);
    }

    if (person.most_recent_district !== '') {
      details.push(person.most_recent_district);
    }

    if (person.party !== '') {
      details.push(person.party);
    }

    return details.join(', ');
  }.property('person')
});

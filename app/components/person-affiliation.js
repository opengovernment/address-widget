import Ember from 'ember';

export default Ember.Component.extend({
  person: null,
  affiliation: function() {
    var affiliation = [],
        person = this.get('person');

    if (person.policital_position_title !== '') {
      affiliation.push(person.political_position_title);
    }

    if (person.most_recent_district !== '') {
      affiliation.push(person.most_recent_district);
    }

    if (person.party !== '') {
      affiliation.push(person.party);
    }

    return affiliation.join(', ');
  }.property('person')
});

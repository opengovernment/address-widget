import Ember from 'ember';

export default Ember.Object.extend({
  title: null,
  body: null,
  originating_url: null,
  user: { email: null }
});

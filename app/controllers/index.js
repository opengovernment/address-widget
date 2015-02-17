import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'application',
  address: Ember.computed.alias('controllers.application.address')
});

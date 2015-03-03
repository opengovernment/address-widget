import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Route.extend({
  model: function() {
    var address = this.controllerFor('application').get('address');
    var url = 'http://' + config.APP.askThemHost + '/locator.json?q=' + address;
    return Ember.$.getJSON(url);
  }
});

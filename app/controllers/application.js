import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  attrs: config.options,
  address: null,
  duringQuestionSteps: false
});

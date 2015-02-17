import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('person-details', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it takes person object and returns things like name, office held, etc.', function(assert) {
  assert.expect(3);

  var component = this.subject(),
      person = { 'full_name': 'Bernard Sanders',
                 'political_position_title': 'Senator',
                 'most_recent_district': '',
                 'party': 'Independent',
                 'state': 'vt' };

  var expectedDetails = 'Senator, Independent';

  Ember.run(function() {
    component.set('person', person);
  });

  assert.equal(this.$('h2').text(), person.full_name);
  assert.equal(this.$('.person-info').data('jurisdiction'), person.state);
  assert.equal(this.$('span').text(), expectedDetails);
});

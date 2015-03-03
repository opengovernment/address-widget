import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:people', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// WARN: not in love w/ this test as it doesn't confirm property is present
// with default value due to ember controller getter default behavior
// however it may act as sanity test if something else messes w/ selectedPerson
test('it has a default selectedPerson value of null', function(assert) {
  var controller = this.subject();

  var result = controller.get('selectedPerson');

  assert.equal(result, null);
});

// WARN: not in love w/ this test as it doesn't confirm property can be set
// with a value due to ember controller default behavior
// however it may act as sanity test if something else messes w/ selectedPerson
test('it takes a selectedPerson', function(assert) {
  var value = { 'full_name': 'Bernard Sanders',
                'political_position_title': 'Senator',
                'most_recent_district': '',
                'party': 'Independent',
                'state': 'vt' };

  var controller = this.subject({
    selectedPerson: value
  });

  var result = controller.get('selectedPerson');

  assert.equal(result, value);
});

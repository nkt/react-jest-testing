jest.dontMock('../StarIcon');

describe('StarIcon', () => {
  it('should render the star icon', () => {
    const {assert} = require('chai');
    const React = require('react/addons');
    const StarIcon = require('../StarIcon');
    const Icon = require('../Icon');
    const {TestUtils} = React.addons;

    const starIcon = TestUtils.renderIntoDocument(<StarIcon />);
    const icon = Icon.mock.instances[0];

    assert.deepEqual(icon.props, {
      glyph: 'star'
    });
  });
});

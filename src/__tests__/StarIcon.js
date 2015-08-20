jest.dontMock('../StarIcon');

describe('StarIcon', () => {
  it('should render the star icon', () => {
    const {assert} = require('chai');
    const React = require('react/addons');
    const StarIcon = require('../StarIcon');
    const {TestUtils} = React.addons;

    const icon = TestUtils.renderIntoDocument(<StarIcon />);
  });
});

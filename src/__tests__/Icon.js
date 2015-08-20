jest.dontMock('../Icon');

describe('Icon', () => {
  it('should render span with specified glyph', () => {
    const {assert} = require('chai');
    const React = require('react/addons');
    const Icon = require('../Icon');
    const {TestUtils} = React.addons;

    const icon = TestUtils.renderIntoDocument(<Icon glyph="test" />);
    const {className} = icon.getDOMNode();

    assert.equal(className, 'fa fa-test');
  });
});

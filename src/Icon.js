const React = require('react');

const Icon = React.createClass({
  render() {
    return <span className={`fa fa-${this.props.glyph}`} />;
  }
});

module.exports = Icon;

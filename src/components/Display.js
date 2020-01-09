import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.result}</h1>
      </div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string.isRequired
}

export default Display;

import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result }) {
  return (
    <div>
      <h1>{result}</h1>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result, operation }) {
  return (
    <div className="display">
      <h1>
        {result || '0'} {operation || ' '} {/* eslint-disable-line */}
      </h1>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  operation: '',
};

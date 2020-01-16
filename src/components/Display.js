import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result, next, operation }) {
  return (
    <div className="display">
      <h1>
        {next || result || '0'} {operation || ' '}
      </h1>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  next: '',
  operation: '',
};

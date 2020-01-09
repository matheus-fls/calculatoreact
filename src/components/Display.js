import React from 'react';
import PropTypes from 'prop-types';

export default function Display({result}) {
  return (
    <div>
      <h1>{result || '0'}</h1>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

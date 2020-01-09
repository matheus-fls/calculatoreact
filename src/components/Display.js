import React from 'react';
import PropTypes from 'prop-types';

export default function Display(state) {
  return (
    <div>
      <h1>{state.result}</h1>
    </div>
  );
}

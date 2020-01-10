import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, color, wide }) {
  return (
    <button type="button" className={wide ? 'wide button' : 'button'} 
      style={{backgroundColor: color || '#f5913e'}}>{ name }</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, color, wide, clickHandler }) { {/* eslint-disable-line */}
  const handleClick = () => clickHandler(name);

  return (
    <button
      type="button"
      className={wide ? 'wide button' : 'button'}
      style={{ backgroundColor: color || '#f5913e' }}
      onClick={handleClick}
    >
      { name }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: '#f5913e',
};

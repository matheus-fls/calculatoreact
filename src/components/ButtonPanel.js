import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel({ clickHandler }) {
  const buttons = [['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  function handleClick(buttonName) {
    return clickHandler(buttonName);
  }

  return (
    <div className="button-panel">
      {buttons.map((e, index) => (
        <div key={`group-${index + 1}`} className="button-row"> {/* eslint-disable-line */}
          {e.map(name => (
            <Button
              key={name}
              name={name}
              wide={name === '0'}
              color={['÷', 'X', '-', '+', '='].includes(name) ? null : '#e0e0e0'}
              clickHandler={handleClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  const buttons = [['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div>
      {buttons.map((e, index) => (
        <div key={`group-${index}`}>
          {e.map(name => <Button key={name} name={name} />)} {/* eslint-disable-line */}
        </div>
      ))}
    </div>
  );
}

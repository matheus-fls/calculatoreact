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
        <div key={`group-${index + 1}`}> {/* eslint-disable-line */}
          {e.map(name => <Button key={name} name={name} />)}
        </div>
      ))}
    </div>
  );
}

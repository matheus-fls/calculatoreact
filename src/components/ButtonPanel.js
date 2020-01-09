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
      {(buttons.map((e) => <div key={(Math.random() * 100).toString()}>
        {e.map((name) => <Button key={name} name={name} />)}
      </div>
      ))}
    </div>
  );
}

import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  const buttons = [['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ]
  return (
    <div>
      {buttons.map((e, index) => {
        return (
          <div key={index}>
            {e.map((name) => {
              return (
                <Button key={name} name={name} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

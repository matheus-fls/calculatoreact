import Big from 'big.js';

export default function operate ({ numberOne, numberTwo, operation }) {
  ['÷', 'X', '-', '+', '=', '%']
  if (operation === '÷') {
    return Big(numberOne) / Big(numberTwo); 
  } else if (operation === 'X') {
    return Big(numberOne) * Big(numberTwo);
  } else if (operation === '-') {
    return Big(numberOne) - Big(numberTwo);
  } else if (operation === '+') {
    return Big(numberOne) + Big(numberTwo);
  } else if (operation === '%') {
    return ((Big(numberOne) * Big(numberTwo)) / 100);
  } 
}

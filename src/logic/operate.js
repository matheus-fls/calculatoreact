const Big = require('big.js');

export default function operate(numberOne, numberTwo, operation) {
  const unus = Big(numberOne);
  const duo = Big(numberTwo);
  let result;

  if (operation === '÷') {
    if (numberOne === '0' || numberTwo === '0') {
      return 'Cannot divide by zero'
    } else {
      result = unus.div(duo);
    }
  } else if (operation === 'X') {
    result = unus.times(duo);
  } else if (operation === '-') {
    result = unus.minus(duo);
  } else if (operation === '+') {
    result = unus.plus(duo);
  } else if (operation === '%') {
    result = unus.times(duo).div(Big(100));
  }

  return result;
}

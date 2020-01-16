const Big = require('big.js');

export default function operate(numberOne, numberTwo, operation) {
  console.log(numberOne, numberTwo);
  const unus = Big(numberOne);
  const duo = Big(numberTwo);
  console.log('UNUS: ' + unus + ' DUO: ' + duo);
  let result;

  if (operation === '÷') {
    result = unus.div(duo);
  } else if (operation === 'X') {
    result = unus.times(duo);
  } else if (operation === '-') {
    result = unus.minus(duo);
  } else if (operation === '+') {
    result = unus.plus(duo);
  } else if (operation === '%') {
    result = unus.times(duo).div(Big(100));
  }
  console.log('Result: ' + result);
  return result;
}

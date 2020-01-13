import Big from 'big';

export default function operate({ numberOne, numberTwo, operation }) {
  let result;
  if (operation === '÷') {
    result = Big(numberOne) / Big(numberTwo);
  } else if (operation === 'X') {
    result = Big(numberOne) * Big(numberTwo);
  } else if (operation === '-') {
    result = Big(numberOne) - Big(numberTwo);
  } else if (operation === '+') {
    result = Big(numberOne) + Big(numberTwo);
  } else if (operation === '%') {
    result = (Big(numberOne) * Big(numberTwo)) / 100;
  }
  return result;
}

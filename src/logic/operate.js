import Big from 'big';

export default function operate({ numberOne, numberTwo, operation }) {
  const unus = Big(numberOne);
  const duo = Big(numberTwo);
  let result;

  if (operation === '÷') {
    result = unus.div(duo);
  } else if (operation === 'X') {
    result = unus.times(duo);
  } else if (operation === '-') {
    result = unus.minus(duo);
  } else if (operation === '+') {
    result = Big(numberOne) + Big(numberTwo);
  } else if (operation === '%') {
    result = unus.times(duo).div(Big(100));
  }

  return result;
}

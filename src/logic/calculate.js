import operate from './operate';

export default function calculate({ data: { total, next, operation }, buttonName }) {
  let newTotal = total;
  let newNext = next;
  if (buttonName === '+/-') {
    newTotal *= -1;
    newNext *= -1;
  } else if (buttonName === 'AC') {
    newTotal = 0;
    newNext = 0;
  } else {
    newTotal = operate(newTotal, newNext, operation);
  }
  return newTotal;
}

import operate from './operate';

export default function calculate({ next, total, operation }, buttonName) {
  let newTotal = total;
  let newNext = next;
  let newOperation = operation;

  if (buttonName === '+/-') {
    newTotal *= -1;
    newNext *= -1;
  } else if (buttonName === 'AC') {
    newTotal = null;
    newNext = null;
    newOperation = null;
  } else {
    newTotal = operate(newNext, newTotal, newOperation);
  }

  return newTotal.toString();
}

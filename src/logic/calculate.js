import operate from './operate';

export default function calculate({ data: {total, next, operation}, buttonName }) {
  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (buttonName === 'AC') {
    total = 0;
    next = 0;
  } else {
    total = operate(total, next, operation);
  }
  return total;
}

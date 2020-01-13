import operate from './operate';

export default function calculate ({ data, buttonName }) {
  if (buttonName === "+/-") {
    data.total *= -1;
    data.next *= -1;
  } else if (buttonName === "AC") {
    data.total = 0;
    data.next = 0;
  } else {
    data.total = operate(numberOne, numberTwo, operation)
  }
  return data;
}

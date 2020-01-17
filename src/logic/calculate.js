import operate from './operate';

export default function calculate({
  total, 
  next, 
  operation, 
  temp
}, buttonName) {

  const result = {
    newTotal: total,
    newNext: next,
    newOperation: operation,
    newTemp: temp,
  }

  if (buttonName >= '1' && buttonName <= '9') {
    if (total === '0' || total === null) {
      result.newTotal = buttonName;
    } else {
      result.newTotal = total + buttonName;
    }
  } else if (buttonName === 'AC') {
      result.newTotal = null;
      result.newNext = null;
      result.newOperation = null;
      result.newTemp = null;
  } else if (buttonName === '+/-' && (total !== null || next !== null)) {
    result.newTotal = (total * -1).toString();
  } else if (buttonName === '.') {
    if (total === null) {
      result.total = '0.';
    } else if (!total.includes('.')) {
      result.newTotal = total + buttonName;
    }
  } else if (buttonName === '0') {
    if (total === null) {
      result.newTotal = buttonName;
    } else if (total !== '0') {
      result.newTotal = total + buttonName;
    }
  } else if (['÷', 'X', '-', '+', '%'].includes(buttonName) && (total !== null || next !== null)) {
    if (total && next && operation) {
      result.newNext = operate(result.newTotal, result.newNext, result.newOperation, buttonName);
      result.newTotal = null;
      result.newOperation = buttonName;
    } else {
      result.newOperation = buttonName;
      result.newNext = total || next;
      result.newTotal = null;
    }
  } else if (buttonName === '=') {
    if (total !== null && operation !== null && next !== null) {
      result.newTemp = operate(result.newTotal, result.newNext, result.newOperation, buttonName);
      result.newTotal = null;
      result.newNext = null;
      result.newOperation = null;
    } else {
      result.newTotal = total || next;
      result.newOperation = null;
    }
  }

  return result;
}

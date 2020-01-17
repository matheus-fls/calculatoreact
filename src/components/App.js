import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      temp: null,
    };
  }

  handleClick = (buttonName) => {
    const { total, next, operation } = this.state;

    if (buttonName >= '1' && buttonName <= '9') {
      if (total === '0' || total === null) {
        this.setState({ total: buttonName });
      } else {
        this.setState(({ total }) => ({ total: total + buttonName }));
      }
    } else if (buttonName === 'AC') {
      this.setState({
        total: null,
        next: null,
        operation: null,
        temp: null,
      });
    } else if (buttonName === '+/-' && (total !== null || next !== null)) {
      this.setState({ total: calculate({ total, next, operation }, buttonName) });
    } else if (buttonName === '.') {
      if (total === null) {
        this.setState({ total: '0.' });
      } else if (!total.includes('.')) {
        this.setState(({ total }) => ({ total: total + buttonName }));
      }
    } else if (buttonName === '0') {
      if (total === null) {
        this.setState({ total: buttonName });
      } else if (total !== '0') {
        this.setState(({ total }) => ({ total: total + buttonName }));
      }
    } else if (['÷', 'X', '-', '+', '%'].includes(buttonName) && (total !== null || next !== null)) {
      if (total && next && operation) {
        this.setState({
          next: calculate({ total, next, operation }, buttonName),
          total: null,
          operation: buttonName,
        });
      } else {
        this.setState({
          operation: buttonName,
          next: total || next,
          total: null,
        });
      }
    } else if (buttonName === '=') {
      if (total !== null && operation !== null && next !== null) {
        this.setState({
          temp: calculate({ total, next, operation }, buttonName),
          total: null,
          next: null,
          operation: null,
        });
      } else {
        this.setState({
          total: total || next,
          operation: null,
        });
      }
    }
  }

  render() {
    const { total, next, operation, temp } = this.state;
    return (
      <div className="app">
        <Display result={total || next || temp} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;

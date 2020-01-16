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
    };
  }

  handleClick = (buttonName) => {
    if (buttonName >= '1' && buttonName <= '9') {
      (this.state.total === '0' || this.state.total === null) ? this.setState({ total: buttonName }) :
        this.setState(({total}) => ({ total: total + buttonName }))
    } else if (buttonName === 'AC') {
      this.setState({
        total: null,
        next: null,
        operation: null,
      })
    } else if (buttonName === '+/-' && (this.state.total !== null || this.state.next !== null)) {
      this.setState({
        total: calculate(this.state, buttonName),
      })
    } else if (buttonName === '.') {
      if (this.state.total === null) {
        this.setState({total: '0' + buttonName}) 
      } else if (!this.state.total.includes('.')) {
        this.setState(({total}) => ({ total: total + buttonName }))
      }
    } else if (buttonName === '0') {
      if (this.state.total === null) {
        this.setState({ total: buttonName })
      } else if (this.state.total !== '0') {
        this.setState(({total}) => ({ total: total + buttonName }))
      }
    } else if (['÷', 'X', '-', '+', '%'].includes(buttonName) && (this.state.total !== null || this.state.next !== null)) {
      if (this.state.total && this.state.next && this.state.operation) {
        this.setState({
          next: calculate(this.state, buttonName),
          total: null,
          operation: buttonName,
        });
      } else {
        this.setState({
          operation: buttonName,
          next: this.state.total || this.state.next,
          total: null,
        });
      }
    } else if (buttonName === '=') {
      if (this.state.total !== null && this.state.operation !== null && this.state.next !== null) {
        this.setState({
          total: calculate(this.state, buttonName),
          next: null,
          operation: null,
        })
      } else {
        this.setState({
          total: this.state.total || this.state.next,
          operation: null,
        })
      }
    } 
    console.log(this.state);
  }

  render() {
    return (
      <div className="app">
        <Display result={this.state.total || this.state.next} operation={this.state.operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;

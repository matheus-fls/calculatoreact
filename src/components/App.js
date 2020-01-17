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
    const { 
      total, 
      next, 
      operation, 
      temp 
    } = this.state;

    const result = calculate({ 
      total, 
      next, 
      operation, 
      temp 
    }, buttonName);

    this.setState({
      total: result.newTotal,
      next: result.newNext,
      operation: result.newOperation,
      temp: result.newTemp,
    });
  }

  render() {
    const { 
      total, 
      next, 
      operation, 
      temp 
    } = this.state;

    return (
      <div className="app">
        <Display result={total || next || temp} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;

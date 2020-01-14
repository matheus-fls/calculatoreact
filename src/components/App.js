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

  handleClick(buttonName) {
    this.setState({
      total: calculate(this.state, buttonName),
    })
  }

  render() {
    return (
      <div className="app">
        <Display result={this.state.total || this.state.next} />
        <ButtonPanel clickHandler={this.handleClick()} />
      </div>
    );
  }
}

export default App;

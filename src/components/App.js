import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: '' };
  }

  render() {
    const { result } = this.state.result;
    return (
      <div className="App">
        <Display result={result}/>
        <ButtonPanel />
      </div>
    )
  }
}

export default App;

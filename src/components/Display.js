import React from 'react';

class Display extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.result}</h1>
      </div>
    );
  }
}

export default Display;

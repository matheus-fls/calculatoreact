import React from 'react';

class Button extends React.Component {
  render() {
    return <div>
      {this.props.names.map((name) => (
        <span>{ name }</span>
      ))}
    </div>;
  }
}

export default Button;

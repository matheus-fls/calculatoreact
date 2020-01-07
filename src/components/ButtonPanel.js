import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div>
        <Button names={['AC', '+/-', '%', '÷']}/>
        <Button names={['7', '8', '9', 'X']} />
        <Button names={['4', '5', '6', '-']} />
        <Button names={['1', '2', '3', '+']} />
        <Button names={['0', '.', '=']} />
      </div>
    );
  }
}

export default ButtonPanel;

{/* <div>
  <div>
  <Button names={['AC', '+/-', '%', '÷']}/>
  </div>
  <div>
    <Button names={['7', '8', '9', 'X']} />
  </div>
  <div>
    <Button names={['4', '5', '6', '-']} />
  </div>
  <div>
    <Button names={['1', '2', '3', '+']} />
  </div>
  <div>
    <Button names={['0', '.', '=']} />
  </div>
</div> */}
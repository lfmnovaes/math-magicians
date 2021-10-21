import React from 'react';
import CalcKey from './CalcKey';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="display">
          <span>0</span>
        </div>
        <div className="keyboard">
          <div className="digits">
            <CalcKey text="AC" />
            <CalcKey text="+/-" />
            <CalcKey text="%" />
            <CalcKey text="7" />
            <CalcKey text="8" />
            <CalcKey text="9" />
            <CalcKey text="4" />
            <CalcKey text="5" />
            <CalcKey text="6" />
            <CalcKey text="1" />
            <CalcKey text="2" />
            <CalcKey text="3" />
            <div className="zero">
              <CalcKey text="0" />
            </div>
            <CalcKey text="." />
          </div>
          <div className="operators">
            <CalcKey text="/" />
            <CalcKey text="x" />
            <CalcKey text="-" />
            <CalcKey text="+" />
            <CalcKey text="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

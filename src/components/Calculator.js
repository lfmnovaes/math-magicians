import React from 'react';

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
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button">3</button>
            <button type="button">2</button>
            <button type="button">1</button>
            <button id="zero" type="button">0</button>
            <button type="button">.</button>
          </div>
          <div className="operators">
            <button type="button">/</button>
            <button type="button">x</button>
            <button type="button">-</button>
            <button type="button">+</button>
            <button type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

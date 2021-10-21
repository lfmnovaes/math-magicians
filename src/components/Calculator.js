import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
  }

  onClickHandler = (e) => {
    this.setState((prev) => calculate(prev, e.target.name));
  };

  handleDisplay = (total, next) => {
    if (total === null && next == null) {
      return 0;
    }
    if (next === null) {
      return total;
    }
    return next;
  };

  render() {
    const { total, next } = this.state;

    return (
      <div className="calculator">
        <div className="display">
          <span>{this.handleDisplay(total, next)}</span>
        </div>
        <div className="keyboard">
          <div className="digits">
            <button onClick={this.onClickHandler} type="button" name="AC">AC</button>
            <button onClick={this.onClickHandler} type="button" name="+/-">+/-</button>
            <button onClick={this.onClickHandler} type="button" name="%">%</button>
            <button onClick={this.onClickHandler} type="button" name="7">7</button>
            <button onClick={this.onClickHandler} type="button" name="8">8</button>
            <button onClick={this.onClickHandler} type="button" name="9">9</button>
            <button onClick={this.onClickHandler} type="button" name="4">4</button>
            <button onClick={this.onClickHandler} type="button" name="5">5</button>
            <button onClick={this.onClickHandler} type="button" name="6">6</button>
            <button onClick={this.onClickHandler} type="button" name="1">1</button>
            <button onClick={this.onClickHandler} type="button" name="2">2</button>
            <button onClick={this.onClickHandler} type="button" name="3">3</button>
            <button onClick={this.onClickHandler} type="button" name="0">0</button>
            <button onClick={this.onClickHandler} type="button" name=".">.</button>
          </div>
          <div className="operators">
            <button onClick={this.onClickHandler} type="button" name="÷">÷</button>
            <button onClick={this.onClickHandler} type="button" name="x">x</button>
            <button onClick={this.onClickHandler} type="button" name="-">-</button>
            <button onClick={this.onClickHandler} type="button" name="+">+</button>
            <button onClick={this.onClickHandler} type="button" name="=">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

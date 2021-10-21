import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [states, setState] = useState({});

  const onClickHandler = (e) => {
    setState(calculate(states, e.target.name));
  };

  const handleDisplay = () => {
    const { total, next } = states;
    if (total === null && next == null) {
      return 0;
    }
    if (next === null) {
      return total;
    }
    return next;
  };

  return (
    <div className="calculator">
      <div className="display">
        <span>{handleDisplay() || 0}</span>
      </div>
      <div className="keyboard">
        <div className="digits">
          <button onClick={onClickHandler} type="button" name="AC">AC</button>
          <button onClick={onClickHandler} type="button" name="+/-">+/-</button>
          <button onClick={onClickHandler} type="button" name="%">%</button>
          <button onClick={onClickHandler} type="button" name="7">7</button>
          <button onClick={onClickHandler} type="button" name="8">8</button>
          <button onClick={onClickHandler} type="button" name="9">9</button>
          <button onClick={onClickHandler} type="button" name="4">4</button>
          <button onClick={onClickHandler} type="button" name="5">5</button>
          <button onClick={onClickHandler} type="button" name="6">6</button>
          <button onClick={onClickHandler} type="button" name="1">1</button>
          <button onClick={onClickHandler} type="button" name="2">2</button>
          <button onClick={onClickHandler} type="button" name="3">3</button>
          <button onClick={onClickHandler} type="button" name="0">0</button>
          <button onClick={onClickHandler} type="button" name=".">.</button>
        </div>
        <div className="operators">
          <button onClick={onClickHandler} type="button" name="÷">÷</button>
          <button onClick={onClickHandler} type="button" name="x">x</button>
          <button onClick={onClickHandler} type="button" name="-">-</button>
          <button onClick={onClickHandler} type="button" name="+">+</button>
          <button onClick={onClickHandler} type="button" name="=">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

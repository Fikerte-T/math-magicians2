import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: null,
    };
  }

  clickHandler(state, bName) {
    const resultObj = calculate(state, bName);
    this.setState({
      ...resultObj,
    });
  }

  render() {
    const { next, total, operation } = this.state;
    let result = '0';
    if (total) {
      result = `${total} ${operation || ''} ${next || ''}`;
    } else if (next) {
      result = next;
    }
    return (
      <div className="wrapper">
        <div className="result">{result || '0'}</div>
        <div className="buttons-container">
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button">AC</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button">+/-</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button">%</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button sign">&divide;</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button">7</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button">8</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button">9</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button sign">x</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button">4</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button">5</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button">6</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button sign">-</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button">1</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button">2</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button">3</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button sign">+</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button zero">0</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button">.</button>
          <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button" className="button">=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;

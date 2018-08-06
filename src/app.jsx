import React from 'react';

import '../styles/app.css';

const romanArray = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

class App extends React.Component {
  constructor() {
    super();
    this.state = { query: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  fromNumber(number) {
    const invalidNumber = 'Only support numbers between 1 and 3999';
    if (number <= -1 || number > 3999) return invalidNumber;

    if (number === 0) return '';
    for (let i = 0; i < romanArray.length; i += 1) {
      if (number >= romanArray[i][0]) {
        return romanArray[i][1] + this.fromNumber(number - romanArray[i][0]);
      }
    }
    return undefined;
  }

  render() {
    return (
      <div id="container">
        <img id="image" src={'https://www.mathsisfun.com/numbers/images/roman-1984.gif'} alt="logo" />
        <br />
        <input
          id="input"
          type="text"
          maxLength="5"
          onChange={this.handleChange}
          value={this.state.query}
          placeholder="input arabic value"
        />
        <div id="output">
          Roman Numeral Output:
          <br />
          <h1 id="result">
            {this.fromNumber(this.state.query)}
          </h1>
        </div>
      </div>
    );
  }
}

export default App;

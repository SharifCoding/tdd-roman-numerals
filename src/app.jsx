import React from 'react';

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
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  fromNumber(number) {
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
        <input
          id="input"
          type="text"
          onChange={this.handleChange}
          value={this.state.query}
          placeholder="Enter decimal value"
        />
        <p>
          Roman Numeral Output:
          <br />
          <h1 id="result">
            {this.fromNumber(this.state.query)}
          </h1>
        </p>
      </div>
    );
  }
}

export default App;

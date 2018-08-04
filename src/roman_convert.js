const romanArray = [
  // romanArray[i][0] reads number array
  // romanArray[i][1] reads roman character
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

class RomanNumeralGenerator {
  constructor() { }

  fromNumber(number) {
    if (number === 0) return '';
    for (let i = 0; i < romanArray.length; i += 1) {
      if (number >= romanArray[i][0]) {
        number = number - romanArray[i][0];
        return romanArray[i][1] + this.fromNumber(number);
      }
    }
    return undefined;
  }
}

export default RomanNumeralGenerator;

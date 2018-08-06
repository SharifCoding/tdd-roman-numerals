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

class RomanNumeralGenerator {
  constructor() { }

  // Only support numbers between 1 and 3999
  // checkNumber(number) {
  //   if (typeof number !== 'number') return false;
  //   if (number < 0 || number > 3999) return false;
  //   return true;
  // }

  fromNumber(number) {
    if (number <= -1 || number >= 4000) return 'Only support numbers between 1 and 3999';
    if (number === 0) return '';
    for (let i = 0; i < romanArray.length; i += 1) {
      if (number >= romanArray[i][0]) {
        return romanArray[i][1] + this.fromNumber(number - romanArray[i][0]);
      }
    }
    return undefined;
  }
}

export default RomanNumeralGenerator;

// CONSTRUCTOR FUNCTION
class RomanNumeralGenerator {
  constructor(number) {
    this.number = number;
  }

  // OBJECTS PROTOTYPE
  generate() {
    if (this.number === 5) {
      return 'V';
    }
    if (this.number === 4) {
      return 'IV';
    }
    if (this.number === 3) {
      return 'III';
    }
    if (this.number === 2) {
      return 'II';
    }
    return 'I';
  }
}

// EXPORTS FUNCTION
export default RomanNumeralGenerator;

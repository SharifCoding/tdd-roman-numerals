// CONSTRUCTOR FUNCTION
class RomanNumeralGenerator {
  constructor(number) {
    this.number = number;
  }

  // OBJECTS PROTOTYPE
  generate() {
    if (this.number <= 0) return '';
    if (this.number >= 5) {
      this.number = this.number - 5;
      return `V${this.generate(this.number)}`;
    }
    if (this.number >= 4) {
      this.number = this.number - 4;
      return `IV${this.generate(this.number)}`;
    }
    // if (this.number >= 1)
    this.number = this.number - 1;
    return `I${this.generate(this.number)}`;
  }
}

// EXPORTS FUNCTION
export default RomanNumeralGenerator;

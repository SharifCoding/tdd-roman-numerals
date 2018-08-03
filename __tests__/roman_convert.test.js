// Require the `Roman` function into the unit test.
import RomanNumeralGenerator from '../src/roman_convert';

// Testing the Roman function returns an object.
describe('constructor', () => {
  it('returns an object', () => {
    expect(new RomanNumeralGenerator()).toBeInstanceOf(Object);
  });
});

// Checking initial value to 'roman.number' returns 'undefined'.
describe('constructor', () => {
  it('initial number value returns \'undefined\'', () => {
    const roman = new RomanNumeralGenerator();
    expect(roman.number).toBeUndefined();
  });
});

// Testing the number property on the object being created by the constructor.
describe('constructor', () => {
  it('sets the number property', () => {
    const romanMin = new RomanNumeralGenerator(1);
    expect(romanMin.number).toEqual(1);

    const numberMax = new RomanNumeralGenerator(3999);
    expect(numberMax.number).toEqual(3999);
  });
});

// Checking 'roman.generate' returns 'I' when value is '1'.
describe('generate', () => {
  it('returns \'I\' when value is \'1\'', () => {
    const roman = new RomanNumeralGenerator();
    roman.generate();
    expect(roman.generate(1)).toEqual('I');
  });
});

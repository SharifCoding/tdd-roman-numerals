// Require the `Roman` function into the unit test.
import RomanNumeralGenerator from '../src/roman_convert';

// Checking the constructor is up and running.
describe('constructor', () => {
  // Testing the Roman function returns an object.
  it('returns an object', () => {
    expect(new RomanNumeralGenerator()).toBeInstanceOf(Object);
  });
  // Testing initial value to 'roman.number' returns 'undefined'.
  it('initial number value returns \'undefined\'', () => {
    const roman = new RomanNumeralGenerator();
    expect(roman.number).toBeUndefined();
  });
  // Testing the number property on the object being created by the constructor.
  it('sets the number property', () => {
    const romanMin = new RomanNumeralGenerator(1);
    expect(romanMin.number).toEqual(1);

    const numberMax = new RomanNumeralGenerator(3999);
    expect(numberMax.number).toEqual(3999);
  });
});

// Checking the generate is up and running.
describe('generate', () => {
  // Testing 'roman.generate' returns 'I' when value is '1'.
  it('returns \'I\' when value is \'1\'', () => {
    const roman = new RomanNumeralGenerator();
    roman.number = 1;
    expect(roman.generate(1)).toEqual('I');
  });
  // Testing 'roman.generate' returns 'II' when value is '2'.
  it('returns \'II\' when value is \'2\'', () => {
    const roman = new RomanNumeralGenerator();
    roman.number = 2;
    expect(roman.generate()).toEqual('II');
  });
  // Testing 'roman.generate' returns 'III' when value is '3'.
  it('returns \'III\' when value is \'3\'', () => {
    const roman = new RomanNumeralGenerator();
    roman.number = 3;
    expect(roman.generate()).toEqual('III');
  });
  // Testing 'roman.generate' returns 'IV' when value is '4'.
  it('returns \'IV\' when value is \'4\'', () => {
    const roman = new RomanNumeralGenerator();
    roman.number = 4;
    expect(roman.generate()).toEqual('IV');
  });
  // Testing 'roman.generate' returns 'V' when value is '5'.
  it('returns \'V\' when value is \'5\'', () => {
    const roman = new RomanNumeralGenerator();
    roman.number = 5;
    expect(roman.generate()).toEqual('V');
  });
});

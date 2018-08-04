// Require the `RomanNumeralGenerator` function into the unit test.
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
    const numberMin = new RomanNumeralGenerator(1);
    expect(numberMin.number).toEqual(1);

    const numberMax = new RomanNumeralGenerator(3999);
    expect(numberMax.number).toEqual(3999);
  });
});

// Checking the generate is up and running.
describe('generate >=0', () => {
  const roman = new RomanNumeralGenerator();
  // Edge cases, return 'null' if less than 1.
  it('returns \'null\' when invalid value is used', () => {
    roman.number = 0;
    expect(roman.generate()).toEqual('');
  });
  // Testing 'roman.generate' returns 'I' when value is '1'.
  it('returns \'I\' when value is \'1\'', () => {
    roman.number = 1;
    expect(roman.generate()).toEqual('I');
  });
  // Testing 'roman.generate' returns 'II' when value is '2'.
  it('returns \'II\' when value is \'2\'', () => {
    roman.number = 2;
    expect(roman.generate()).toEqual('II');
  });
  // Testing 'roman.generate' returns 'III' when value is '3'.
  it('returns \'III\' when value is \'3\'', () => {
    roman.number = 3;
    expect(roman.generate()).toEqual('III');
  });
  // Testing 'roman.generate' returns 'IV' when value is '4'.
  it('returns \'IV\' when value is \'4\'', () => {
    roman.number = 4;
    expect(roman.generate()).toEqual('IV');
  });
  // Testing 'roman.generate' returns 'V' when value is '5'.
  it('returns \'V\' when value is \'5\'', () => {
    roman.number = 5;
    expect(roman.generate()).toEqual('V');
  });
  // Testing 'roman.generate' returns 'VI' when value is '6'.
  it('returns \'VI\' when value is \'6\'', () => {
    roman.number = 6;
    expect(roman.generate()).toEqual('VI');
  });
  // Testing 'roman.generate' returns 'VII' when value is '7'.
  it('returns \'VII\' when value is \'7\'', () => {
    roman.number = 7;
    expect(roman.generate()).toEqual('VII');
  });
  // Testing 'roman.generate' returns 'VIII' when value is '8'.
  it('returns \'VIII\' when value is \'8\'', () => {
    roman.number = 8;
    expect(roman.generate()).toEqual('VIII');
  });
});

// Checking the generate is up and running.
describe('generate >=9', () => {
  const roman = new RomanNumeralGenerator();
  // Testing 'roman.generate' returns 'IX' when value is '9'.
  it('returns \'IX\' when value is \'9\'', () => {
    roman.number = 9;
    expect(roman.generate()).toEqual('IX');
  });
  // Testing 'roman.generate' returns 'X' when value is '10'.
  it('returns \'X\' when value is \'10\'', () => {
    roman.number = 10;
    expect(roman.generate()).toEqual('X');
  });
  // Testing 'roman.generate' returns 'XX' when value is '20'.
  it('returns \'XX\' when value is \'20\'', () => {
    roman.number = 20;
    expect(roman.generate()).toEqual('XX');
  });
  // Testing 'roman.generate' returns 'XXXIX' when value is '39'.
  it('returns \'XXXIX\' when value is \'39\'', () => {
    roman.number = 39;
    expect(roman.generate()).toEqual('XXXIX');
  });
  // Testing 'roman.generate' returns 'XL' when value is '40'.
  xit('returns \'XL\' when value is \'40\'', () => {
    roman.number = 40;
    expect(roman.generate()).toEqual('XL');
  });
});

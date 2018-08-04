// Require the `RomanNumeralGenerator` function into the unit test.
import RomanNumeralGenerator from '../src/roman_convert';

// Checking the constructor is up and running.
describe('constructor', () => {
  // Testing the Roman function returns an object.
  it('returns an object', () => {
    expect(new RomanNumeralGenerator()).toBeInstanceOf(Object);
  });
  // Testing initial result value returns ''.
  it('initial result number value returns \'undefined\'', () => {
    const roman = new RomanNumeralGenerator();
    expect(roman.fromNumber()).toBeUndefined();
  });
});

// Checking the generate is up and running.
describe('generate >=0', () => {
  const roman = new RomanNumeralGenerator();
  // Edge cases, return 'null' if less than 1.
  it('returns \'null\' when invalid value is used', () => {
    expect(roman.fromNumber(0)).toEqual('');
  });
  // Testing 'roman.generate' returns 'I' when value is '1'.
  it('returns \'I\' when value is \'1\'', () => {
    expect(roman.fromNumber(1)).toEqual('I');
  });
  // Testing 'roman.generate' returns 'II' when value is '2'.
  it('returns \'II\' when value is \'2\'', () => {
    expect(roman.fromNumber(2)).toEqual('II');
  });
  // Testing 'roman.generate' returns 'III' when value is '3'.
  it('returns \'III\' when value is \'3\'', () => {
    expect(roman.fromNumber(3)).toEqual('III');
  });
});

// Checking the generate is up and running.
describe('generate >=4', () => {
  const roman = new RomanNumeralGenerator();
  // Testing 'roman.generate' returns 'IV' when value is '4'.
  it('returns \'IV\' when value is \'4\'', () => {
    expect(roman.fromNumber(4)).toEqual('IV');
  });
  // Testing 'roman.generate' returns 'V' when value is '5'.
  it('returns \'V\' when value is \'5\'', () => {
    expect(roman.fromNumber(5)).toEqual('V');
  });
  // Testing 'roman.generate' returns 'VI' when value is '6'.
  it('returns \'VI\' when value is \'6\'', () => {
    expect(roman.fromNumber(6)).toEqual('VI');
  });
  // Testing 'roman.generate' returns 'VII' when value is '7'.
  it('returns \'VII\' when value is \'7\'', () => {
    expect(roman.fromNumber(7)).toEqual('VII');
  });
  // Testing 'roman.generate' returns 'VIII' when value is '8'.
  it('returns \'VIII\' when value is \'8\'', () => {
    expect(roman.fromNumber(8)).toEqual('VIII');
  });
});

// Checking the generate is up and running.
describe('generate >=9', () => {
  const roman = new RomanNumeralGenerator();
  // Testing 'roman.generate' returns 'IX' when value is '9'.
  it('returns \'IX\' when value is \'9\'', () => {
    expect(roman.fromNumber(9)).toEqual('IX');
  });
  // Testing 'roman.generate' returns 'X' when value is '10'.
  it('returns \'X\' when value is \'10\'', () => {
    expect(roman.fromNumber(10)).toEqual('X');
  });
  // Testing 'roman.generate' returns 'XX' when value is '20'.
  it('returns \'XX\' when value is \'20\'', () => {
    expect(roman.fromNumber(20)).toEqual('XX');
  });
  // Testing 'roman.generate' returns 'XXXIX' when value is '39'.
  it('returns \'XXXIX\' when value is \'39\'', () => {
    expect(roman.fromNumber(39)).toEqual('XXXIX');
  });
  // Testing 'roman.generate' returns 'XL' when value is '40'.
  it('returns \'XL\' when value is \'40\'', () => {
    expect(roman.fromNumber(40)).toEqual('XL');
  });
  // Testing 'roman.generate' returns 'XLIX' when value is '49'.
  it('returns \'XLIX\' when value is \'49\'', () => {
    expect(roman.fromNumber(49)).toEqual('XLIX');
  });
});

describe('generate >=50', () => {
  const roman = new RomanNumeralGenerator();
  // Testing 'roman.generate' returns 'L' when value is '50'.
  xit('returns \'L\' when value is \'50\'', () => {
    expect(roman.fromNumber(50)).toEqual('L');
  });
});

import RomanNumeralGenerator from '../src/roman_convert';

const roman = new RomanNumeralGenerator();

describe('constructor', () => {
  it('returns an object', () => {
    expect(new RomanNumeralGenerator()).toBeInstanceOf(Object);
  });
  it('initial result number value returns \'undefined\'', () => {
    expect(roman.fromNumber()).toBeUndefined();
  });
});

describe('unsupported numbers', () => {
  it('returns \'Only support numbers between 1 and 3999\' when value less than \'0\'', () => {
    expect(roman.fromNumber(-1)).toEqual('Only support numbers between 1 and 3999');
  });
  it('returns \'Only support numbers between 1 and 3999\' when value greater than \'4000\'', () => {
    expect(roman.fromNumber(4000)).toEqual('Only support numbers between 1 and 3999');
  });
});

describe('generate >=0', () => {
  it('returns \'\' when \'0\' value is used', () => {
    expect(roman.fromNumber(0)).toEqual('');
  });
  it('returns \'I\' when value is \'1\'', () => {
    expect(roman.fromNumber(1)).toEqual('I');
  });
  it('returns \'III\' when value is \'3\'', () => {
    expect(roman.fromNumber(3)).toEqual('III');
  });
});

describe('generate >=4', () => {
  it('returns \'IV\' when value is \'4\'', () => {
    expect(roman.fromNumber(4)).toEqual('IV');
  });
  it('returns \'V\' when value is \'5\'', () => {
    expect(roman.fromNumber(5)).toEqual('V');
  });
  it('returns \'VIII\' when value is \'8\'', () => {
    expect(roman.fromNumber(8)).toEqual('VIII');
  });
});

describe('generate >=9', () => {
  it('returns \'IX\' when value is \'9\'', () => {
    expect(roman.fromNumber(9)).toEqual('IX');
  });
  it('returns \'X\' when value is \'10\'', () => {
    expect(roman.fromNumber(10)).toEqual('X');
  });
  it('returns \'XLIX\' when value is \'49\'', () => {
    expect(roman.fromNumber(49)).toEqual('XLIX');
  });
});

describe('generate >=50', () => {
  it('returns \'L\' when value is \'50\'', () => {
    expect(roman.fromNumber(50)).toEqual('L');
  });
  it('returns \'LXXXIX\' when value is \'89\'', () => {
    expect(roman.fromNumber(89)).toEqual('LXXXIX');
  });
  it('returns \'XC\' when value is \'90\'', () => {
    expect(roman.fromNumber(90)).toEqual('XC');
  });
  it('returns \'XCIX\' when value is \'99\'', () => {
    expect(roman.fromNumber(99)).toEqual('XCIX');
  });
});

describe('generate >=100', () => {
  it('returns \'C\' when value is \'100\'', () => {
    expect(roman.fromNumber(100)).toEqual('C');
  });
  it('returns \'CCCXCIX\' when value is \'399\'', () => {
    expect(roman.fromNumber(399)).toEqual('CCCXCIX');
  });
  it('returns \'CD\' when value is \'400\'', () => {
    expect(roman.fromNumber(400)).toEqual('CD');
  });
  it('returns \'CDXCIX\' when value is \'499\'', () => {
    expect(roman.fromNumber(499)).toEqual('CDXCIX');
  });
});

describe('generate >=500', () => {
  it('returns \'D\' when value is \'500\'', () => {
    expect(roman.fromNumber(500)).toEqual('D');
  });
  it('returns \'CM\' when value is \'900\'', () => {
    expect(roman.fromNumber(900)).toEqual('CM');
  });
  it('returns \'M\' when value is \'1000\'', () => {
    expect(roman.fromNumber(1000)).toEqual('M');
  });
  it('returns \'MMMCMXCIX\' when value is \'3999\'', () => {
    expect(roman.fromNumber(3999)).toEqual('MMMCMXCIX');
  });
  xit('returns \'MV\' when value is \'4000\'', () => {
    expect(roman.fromNumber(4000)).toEqual('MV');
  });
});

/* global describe it expect */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../src/app';

describe('App component', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    if (typeof window !== 'undefined') {
      ReactDOM.render(<App />, document.createElement('div'));
    }
    if (typeof window !== 'undefined') {
      ReactDOM.unmountComponentAtNode(document.createElement('div'));
    }
  });

  it('should contain one #container ', () => {
    expect(wrapper.find('#container')).toHaveLength(1);
  });

  it('should contain one #image ', () => {
    expect(wrapper.find('#image')).toHaveLength(1);
  });

  it('should contain one #input ', () => {
    expect(wrapper.find('#input')).toHaveLength(1);
  });

  it('has a query input that sets query state on change', () => {
    expect(wrapper.state('query')).toEqual('');
    wrapper.find('input').simulate('change', { target: { value: 'foo' } });
    expect(wrapper.state('query')).toBe('foo');
  });

  it('its renders paragraph \'Roman Numeral Output:\'', () => {
    const title = wrapper.find('#output').text();
    expect(title).toEqual('Roman Numeral Output:');
  });

  it('should contain one #result ', () => {
    expect(wrapper.find('#result')).toHaveLength(1);
  });
});

describe('fromNumber method', () => {
  const wrapper = shallow(<App />);
  const realComponentInstance = wrapper.instance();
  it('returns \'Only support numbers between 1 and 3999\' when value is \'-1\'', () => {
    expect(realComponentInstance.fromNumber(-1)).toBe('Only support numbers between 1 and 3999');
  });
  it('returns empty string \'\' when value is \'0\'', () => {
    expect(realComponentInstance.fromNumber(0)).toBe('');
  });
  it('returns \'I\' when value is \'1\'', () => {
    expect(realComponentInstance.fromNumber(1)).toBe('I');
  });
  it('returns \'V\' when value is \'5\'', () => {
    expect(realComponentInstance.fromNumber(5)).toBe('V');
  });
  it('returns \'X\' when value is \'10\'', () => {
    expect(realComponentInstance.fromNumber(10)).toBe('X');
  });
  it('returns \'C\' when value is \'100\'', () => {
    expect(realComponentInstance.fromNumber(100)).toBe('C');
  });
  it('returns \'M\' when value is \'1000\'', () => {
    expect(realComponentInstance.fromNumber(1000)).toBe('M');
  });
  it('returns \'MMMCMXCIX\' when value is \'3999\'', () => {
    expect(realComponentInstance.fromNumber(3999)).toBe('MMMCMXCIX');
  });
  it('returns \'Only support numbers between 1 and 3999\' when value is \'4000\'', () => {
    expect(realComponentInstance.fromNumber(4000)).toBe('Only support numbers between 1 and 3999');
  });
});

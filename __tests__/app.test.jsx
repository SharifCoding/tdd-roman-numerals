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

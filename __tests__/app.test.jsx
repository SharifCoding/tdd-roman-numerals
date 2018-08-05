/* global describe it expect */
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';

import App from '../src/app';

describe('App component', () => {
  it('renders without crashing', () => {
    if (typeof window !== 'undefined') {
      ReactDOM.render(<App />, document.createElement('div'));
    }
    if (typeof window !== 'undefined') {
      ReactDOM.unmountComponentAtNode(document.createElement('div'));
    }
  });

  it('its renders paragraph \'Roman Numeral Output:\'', () => {
    const wrapper = Enzyme.shallow((
      <App />
    ));
    const title = wrapper.find('p').text();
    expect(title).toEqual('Roman Numeral Output:');
  });

  it('has a query input that sets query state on change', () => {
    const wrapper = Enzyme.shallow((
      <App />
    ));
    expect(wrapper.state('query')).toEqual('');
    wrapper.find('input').simulate('change', { target: { value: 'foo' } });
    expect(wrapper.state('query')).toBe('foo');
  });
});
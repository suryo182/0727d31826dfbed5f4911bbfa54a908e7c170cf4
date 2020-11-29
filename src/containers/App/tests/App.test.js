import React from 'react';
import ReactDOM from 'react-dom';
import App from '..';

describe('App container should work properly', () => {
  it('renders without craching', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});

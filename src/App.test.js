import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux';
import store from "./reducer/index";

test('renders learn react link', () => {
  const { getByText } = render( <Provider store={store}>
    <App name="SpaceX Launch Programs" />
  </Provider>);
  const linkElement = getByText(/SpaceX Launch Programs/i);
  expect(linkElement).toBeInTheDocument();
});

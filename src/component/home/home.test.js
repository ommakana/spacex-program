import React from 'react';
import { render } from '@testing-library/react';
import Home from './home';

import {Provider} from 'react-redux';
import store from "../../reducer/index";

test('renders with initial state', () => {
  const { getByText } = render(<Provider store={store}>
    <Home />
  </Provider>);
  const launchYearText = getByText(/Launch Year/i);
  expect(launchYearText).toBeInTheDocument();
});

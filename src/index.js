import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from "./reducer/index";

import App from './App';


ReactDOM.hydrate(
  <Provider store={store}>
    <App name="SpaceX Launch Programs" />
  </Provider>,
  document.getElementById('root')
);

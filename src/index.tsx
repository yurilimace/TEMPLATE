import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import store from './store/'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

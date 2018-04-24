import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {Provider} from 'react-redux';
import Todos from './components/Todos';
ReactDOM.render(
  <Provider store={store}>
      <Todos/>
  </Provider>,
    document.querySelector('#root')
);
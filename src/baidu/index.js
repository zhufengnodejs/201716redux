import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Baidu from './components/Baidu';
import {Provider} from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
        <Baidu/>
    </Provider>,
    document.querySelector('#root')
);
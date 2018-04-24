import React from 'react';
import ReactDOM from 'react-dom';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import store from './store';
// Provider提供者 是用来向下层组件提供store的
//把属性中的仓库对象传递给下层组件
import {Provider} from 'react-redux';
ReactDOM.render(
        <Provider store={store}>
            <div>
                <Counter1/>
                <Counter2/>
            </div>
        </Provider>
,document.querySelector('#root'));

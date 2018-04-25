import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
//这个中间件的作用就是可以让store派发函数
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
let store = createStore(reducer,applyMiddleware(promise,thunk,logger));
export default store;

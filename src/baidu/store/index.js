import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
//这个中间件的作用就是可以让store派发函数
import thunk from 'redux-thunk';
let store = createStore(reducer,applyMiddleware(thunk));
export default store;

import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer';
//这个中间件的作用就是可以让store派发函数
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
//let store = createStore(reducer,applyMiddleware(promise,thunk,logger));
//let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer,composeEnhancers(applyMiddleware(logger,promise,thunk,)));
export default store;

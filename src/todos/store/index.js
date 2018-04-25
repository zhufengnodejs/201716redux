import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
/*return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState, extraArgument);
    }
    return next(action);
};
let thunk = function({ dispatch, getState }){
    return function(next){
        return function(action){
            if (typeof action === 'function') {
                return action(dispatch, getState);
            }
            return next(action);
        }
    }
}
let promise = function({ dispatch, getState }){
    return function(next){
        return function(action){
            if (typeof action.then == 'function') {
                return action.then(dispatch);
            }
            return next(action);
        }
    }
}
let logger = function({ dispatch, getState }){
    return function(next){//==store.dispatch
        return function(action){
            console.log('old state',getState());
            console.log(action);
            next(action);//= store.dispatch(action);
            console.log('new state',getState());
        }
    }
}*/
let store = createStore(reducers,applyMiddleware(logger,thunk,promise));
/*let dispatch = store.dispatch;
/!*
1.手工重写dispatch
2. 如果多个中间件
 *!/
store.dispatch = function(action){
  console.log('old ',store.getState());
  console.log(action);
  dispatch(action);
    console.log('new',store.getState());
}*/
export default store;
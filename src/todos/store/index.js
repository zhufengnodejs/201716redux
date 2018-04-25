import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
let store = createStore(reducers,applyMiddleware(logger));
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
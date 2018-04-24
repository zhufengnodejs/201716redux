import {createStore} from 'redux';
import todos from './todos';
let store = createStore(todos);
export default store;
import counter1 from './counter1';
import counter2 from './counter2';
import {combineReducers} from 'redux';
export default combineReducers({
    counter1,
    counter2
});

/*function reducer(state,action){
    let newState={};
    newState.a = counter1(state.a,action);//{number:0}=>{number:1}
    newState.b = counter1(state.b,action);//{number:0}=>{number:1}
    return newState;
}*/
/**
合并后的状态对象
{
  a:{number:1},
  b:{number:1}
}
**/
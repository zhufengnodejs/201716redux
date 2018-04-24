import * as types from '../action-types';
let initState = {
    todos:[]
}
// {id:Date.now(),text:'吃饭',completed:false}
export default function(state=initState,action){
  switch(action.type){//如果是要增加todo的话
      case types.ADD_TODO:
          return {todos:[...state.todos,{id:Date.now(),text:action.text,completed:false}]};
      default:
          return state;
  }
}
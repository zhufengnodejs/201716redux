import * as types from '../action-types';
let initState = {
    todos:[]
}
// {id:Date.now(),text:'吃饭',completed:false}
export default function(state=initState,action){
  switch(action.type){//如果是要增加todo的话
      case types.ADD_TODO:
          return {todos:[...state.todos,{id:Date.now(),text:action.text,completed:false}]};
      case types.DEL_TODO:
          return {
              todos:state.todos.filter(todo=>todo.id!=action.id)
          }
      case types.TOGGLE_TODO:
          return {
              todos:state.todos.map(todo=>{
                  if(todo.id == action.id)//如果说todo的ID等于action的ID的话
                      todo.completed = !todo.completed;
                  return todo;
              })
          }
      default:
          return state;
  }
}
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
                  if(todo.id == action.id){
                      todo.completed = !todo.completed;
                  }//如果说todo的ID等于action的ID的话
                  return todo;
              })
          }
      case types.TOGGLE_ALL:
          return {
              todos:state.todos.map(todo=>{
                  todo.completed = action.completed;
                  return todo;
              })
          }
      case types.DEL_ALL_COMPLETED:
          return {
              todos:state.todos.filter(todo=>!todo.completed)
          }
      default:
          return state;
  }
}
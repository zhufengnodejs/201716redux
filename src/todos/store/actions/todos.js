import * as types from '../action-types';
export default {
    //添加todo
    addTodo(text){
        return {type:types.ADD_TODO,text};
    },
    //删除TODO
    delTodo(id){
        return {type:types.DEL_TODO,id};
    },
    toggleTodo(id){
        return {type:types.TOGGLE_TODO,id};
    },
    toggleAll(completed){
        return {type:types.TOGGLE_ALL,completed};
    },
    delAllCompleted(){
        return {type:types.DEL_ALL_COMPLETED};
    }
}
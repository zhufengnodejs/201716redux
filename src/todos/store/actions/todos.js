import * as types from '../action-types';
export default {
    //添加todo
    addTodo(text){
        return {type:types.ADD_TODO,text};
    }
}
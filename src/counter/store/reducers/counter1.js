import * as types from '../action-types';
export default function(state={number:3},action){
   switch(action.type){
       case types.INCREMENT1:
           return {number:state.number+1};
       case types.DECREMENT1:
           return {number:state.number-1};
       default:
           return state;
   }
}
import * as types from '../action-types';
export default function(state={number:5},action){
   switch(action.type){
       case types.INCREMENT2:
           return {number:state.number+1};
       case types.DECREMENT2:
           return {number:state.number-1};
       default:
           return state;
   }
}
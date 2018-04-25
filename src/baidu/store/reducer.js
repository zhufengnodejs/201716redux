import {WORDS} from './action-types';
let initState = {
    words:[]
}
export default function(state=initState,action){
   switch(action.type){
       case WORDS:
           return {words:action.words};
       default:
           return state;
   }
}
import {createStore} from 'redux';
const INCREMENT = 'INCREMENT';//加1
const DECREMENT = 'DECREMENT';//减1
function reducer(state={number:0},action){
 switch(action.type){
     case INCREMENT:
         return {number:state.number+1};
     case DECREMENT:
         return {number:state.number-1};
     default:
         return state;
 }
}
let store = createStore(reducer);
let numberDOM = document.getElementById('number');
let incBtnDOM = document.getElementById('incBtn');
let decBtnDOM = document.getElementById('decBtn');
function render(){
    numberDOM.innerHTML = store.getState().number;
}
render();
/**
 * 1. 全局变量有可能命名冲突
 * 2. 可以被任意改变,容易引发不可控的问题
 */
const UPDATE_TITLE_COLOR = 'UPDATE_TITLE_COLOR';
const UPDATE_TITLE_TEXT = 'UPDATE_TITLE_TEXT';
const UPDATE_CONTENT_COLOR = 'UPDATE_CONTENT_COLOR';
const UPDATE_CONTENT_TEXT = 'UPDATE_CONTENT_TEXT';
function renderApp(appState){
  renderTitle(appState.title);
  renderContent(appState.content);
}
function renderTitle(title){
  let titleDOM = document.getElementById('title');
  titleDOM.innerHTML = title.text;
  titleDOM.style.color = title.color;
}
function renderContent(content){
    let contentDOM = document.getElementById('content');
    contentDOM.innerHTML = content.text;
    contentDOM.style.color = content.color;
}
//定义一个创建仓库的方法
function createStore(reducer){
    let state;
    let listeners = [];
    //返回函数内部的状态对象
    function getState(){
        return JSON.parse(JSON.stringify(state));
    }

    //我们规定改变appState的唯一方法就是调用dispatch方法
    function dispatch(action){
        state = reducer(state,action);
        listeners.forEach(listener=>listener());
    }
    //订阅
    function subscribe(listener){
        listeners.push(listener);
        //每个订阅方法调用后都会返回一个新的函数，调用这个新函数就会取消订阅
        return function(){
            listeners  = listeners.filter(item=>item!=listener);
        }
    }
    //初始化状态
    dispatch({type:'@@INIT'});
    //仓库是一个对象
    return {
        getState,
        dispatch,
        subscribe
    }
}
//处理器 保安 接收新动作，然后返回新状态
let initState = {
    title:{
        color:'red',
        text:'标题'
    },
    content:{
        color:'green',
        text:'内容'
    }
};
function reducer(state=initState,action){
    switch(action.type){
        // {type:'UPDATE_TITLE_COLOR',color:'yellow'}
        case UPDATE_TITLE_COLOR:
            return {...state,title:{...state.title,color:action.color}};
        case UPDATE_TITLE_TEXT:
            return {...state,title:{...state.title,text:action.text}};
        case UPDATE_CONTENT_COLOR:
            return {...state,content:{...state.content,color:action.color}};
        case UPDATE_CONTENT_TEXT:
            return {...state,content:{...state.content,text:action.text}};
        default:
           return state;
    }
}
let store = createStore(reducer);
function render(){
  renderApp(store.getState());
}
render();
let unsubscribe = store.subscribe(render);
setTimeout(function(){
    store.dispatch({type:UPDATE_TITLE_COLOR,color:'purple'});
    //取消订阅
    //unsubscribe();
    setTimeout(function(){
        store.dispatch({type:UPDATE_TITLE_TEXT,text:'新标题'});
    },3000)
},3000)
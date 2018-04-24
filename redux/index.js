/**
 * 1. 全局变量有可能命名冲突
 * 2. 可以被任意改变,容易引发不可控的问题
 */

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
function createStore(){
    let state = {
        title:{
            color:'red',
            text:'标题'
        },
        content:{
            color:'green',
            text:'内容'
        }
    }
    //返回函数内部的状态对象
    function getState(){
        return JSON.parse(JSON.stringify(state));
    }

    //我们规定改变appState的唯一方法就是调用dispatch方法
    function dispatch(action){
        switch(action.type){
            // {type:'UPDATE_TITLE_COLOR',color:'yellow'}
            case UPDATE_TITLE_COLOR:
                state.title.color = action.color;
                break;
            case UPDATE_TITLE_TEXT:
                state.title.text = action.text;
                break;
            case UPDATE_CONTENT_COLOR:
                state.content.color = action.color;
                break;
            case UPDATE_CONTENT_TEXT:
                state.content.text = action.text;
                break;
            default:
                break;
        }
    }

    //仓库是一个对象
    return {
        getState,
        dispatch
    }
}
let store = createStore();
renderApp(store.getState());
const UPDATE_TITLE_COLOR = 'UPDATE_TITLE_COLOR';
const UPDATE_TITLE_TEXT = 'UPDATE_TITLE_TEXT';
const UPDATE_CONTENT_COLOR = 'UPDATE_CONTENT_COLOR';
const UPDATE_CONTENT_TEXT = 'UPDATE_CONTENT_TEXT';

setTimeout(function(){
    store.dispatch({type:UPDATE_TITLE_COLOR,color:'purple'});
    renderApp(store.getState());
},3000)
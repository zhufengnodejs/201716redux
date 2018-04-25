//如何通过派发动作的方式跳转路径
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Route,Link} from 'react-router-dom';
//通过派发动作的方式跳转路径
import {ConnectedRouter}  from 'react-router-redux';
import {Provider} from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import createHistory from 'history/createHashHistory';
let history = createHistory();
let counter = function(state=0,action){
   return state;
}
function routerReducer(state={
    location:{path:'/',search:null,hash:null,state:null}
},action){
    switch(action.type){
        case "@@router/LOCATION_CHANGE":
            console.log(action);
            return {...state,location:{...state.location,path:action.payload.pathname}}
        default:
            return state;
    }
}
//合并reducers
let reducers = combineReducers({
    counter,
    router:routerReducer
});
function push(path){
  return  {
      "type":"@@router/CALL_HISTORY_METHOD",
      "payload":{"method":"push","args":[path]}
  }
}
//history.push是用来跳路径的
function routerMiddleware(history){
   return function({disaptch,getState}){
       return function(next){
           return function(action){
                if(action.type === "@@router/CALL_HISTORY_METHOD"){
                    history[action.payload.method].apply(history,action.payload.args);
                }else{
                    next(action);
                }
           }
       }
   }
}
let store = createStore(reducers,applyMiddleware(routerMiddleware(history)));
window.store =store;
let action = {
    "type":"@@router/CALL_HISTORY_METHOD",
    "payload":{"method":"push","args":["/user"]}
};
console.dir(JSON.stringify(push('/user')));
function Home(){
    return (
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/user">用户</Link></li>
                <li><Link to="/profile">个人中心</Link></li>
                <li><button
                    onClick={()=>store.dispatch(push('/user'))}>
                    跳到用户管理</button></li>
            </ul>
        </div>
    )
}
function User(){
    return <div>User</div>
}
function Profile(){
    return <div>Profile</div>
}
//ConnectedRouter 从上下文中拿到store 关联history
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route path="/" component={Home}/>
                <Route path="/user" component={User}/>
                <Route path="/profile" component={Profile}/>
            </div>
        </ConnectedRouter>
    </Provider>
    ,document.querySelector('#root')
);
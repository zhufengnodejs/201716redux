//如何通过派发动作的方式跳转路径
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Route,Link} from 'react-router-dom';
import {ConnectedRouter, routerReducer, routerMiddleware, push}  from 'react-router-redux';
import {Provider} from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import createHistory from 'history/createHashHistory';
let history = createHistory();
let counter = function(state=0,action){
   return state;
}
//合并reducers
let reducers = combineReducers({
    counter,
    router:routerReducer
});
let store = createStore(reducers);
function Home(){
    return <div>Home</div>
}
function User(){
    return <div>User</div>
}
function Profile(){
    return <div>Profile</div>
}
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/user" component={User}/>
                <Route path="/profile" component={Profile}/>
            </div>
        </ConnectedRouter>
    </Provider>
    ,document.querySelector('#root')
);
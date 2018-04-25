//如何通过派发动作的方式跳转路径
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link} from 'react-router-dom';

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
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/user" component={User}/>
                <Route path="/profile" component={Profile}/>
            </div>
        </Router>
    ,document.querySelector('#root')
);
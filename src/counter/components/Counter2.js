import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import store from '../store';
import actions from '../store/actions/counter2';
let newActions = bindActionCreators(actions,store.dispatch);

/**
 * React组件和仓库之间的连接进行关联
 * 1. 把仓库中的状态给组件用
 * 2. 把在组件中发生的动作发射出去
 * 3. 组件还要订阅仓库中的状态变化事件，当状态变化的时候重新渲染组件
 */
export default class Counter extends Component{
      //state = {number:0} 相当于在构造函数this.state = {number:0}
     constructor(){
         super();
         this.state = {number:store.getState().counter2.number};
     }
    componentDidMount(){
         this.unsubscribe = store.subscribe(()=>{
             this.setState({number:store.getState().counter2.number});
         })
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button
                    onClick={newActions.increment}>+</button>
                <button
                    onClick={newActions.decrement}
                >-</button>
            </div>
        )
    }
}
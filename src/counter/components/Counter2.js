import React,{Component} from 'react';
import actions from '../store/actions/counter2';
import {connect} from 'react-redux';
//let newActions = bindActionCreators(actions,store.dispatch);

/**
 * React组件和仓库之间的连接进行关联
 * 1. 把仓库中的状态给组件用
 * 2. 把在组件中发生的动作发射出去
 * 3. 组件还要订阅仓库中的状态变化事件，当状态变化的时候重新渲染组件
 */
class Counter extends Component{
    render(){
        return (
            <div>
                <p>{this.props.number}</p>
                <button
                    onClick={this.props.increment}>+</button>
                <button
                    onClick={this.props.decrement}
                >-</button>
            </div>
        )
    }
}
export default connect(
    state=>state.counter2,
    actions
)(Counter);
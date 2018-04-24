import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import store from '../store';
import actions from '../store/actions/counter1';
//用来实现连接 连接仓库和我们的组件
import {connect} from 'react-redux';
//let newActions = bindActionCreators(actions,store.dispatch);
//纯UI组件 里面没有状态
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
//把一个状态(合并后的state)对象映射为一个当前组件的属性对象
//本质是输入，把仓库中的状态输入到组件中，让组件显示仓库中的状态数据
/**
 * {
 *  counter1:{number:3},
 *  counter2:{number:5},
 * }
 */
const mapStateToProps = (state)=> state.counter1;
//把仓库的dispatch方法映射为一个属性对象
//输出 把用户在组件中的操作输出出去
//const mapDispatchToProps = dispatch=> bindActionCreators(actions,dispatch)
/**
 * {
 *    increment(){dispatch({type:'INCREMENT'})}
 *    decrement(){dispatch({type:'DECREMENT'}}
 * }
 */
export default connect(
    mapStateToProps,
    //dispatch=> bindActionCreators(actions,dispatch)
    actions
)(Counter);



/*newActions= {
    //action creator action创建者，其实就是一个返回action对象的函数
    increment(){
        store.dispatch({type:types.INCREMENT});
    },
    decrement(){
        store.dispatch({type:types.DECREMENT});
    }
}*/
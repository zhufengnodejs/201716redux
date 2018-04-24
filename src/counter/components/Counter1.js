import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import store from '../store';
import actions from '../store/actions/counter1';
let newActions = bindActionCreators(actions,store.dispatch);

export default class Counter extends Component{
      //state = {number:0} 相当于在构造函数this.state = {number:0}
     constructor(){
         super();
         this.state = {number:store.getState().counter1.number};
     }
    componentDidMount(){
         this.unsubscribe = store.subscribe(()=>{
             this.setState({number:store.getState().counter1.number});
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





/*newActions= {
    //action creator action创建者，其实就是一个返回action对象的函数
    increment(){
        store.dispatch({type:types.INCREMENT});
    },
    decrement(){
        store.dispatch({type:types.DECREMENT});
    }
}*/
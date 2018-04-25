import React,{Component} from 'react';
import connect from '../connect';
/**
 * 受控组件 就是指输入框的值受状态控制
 * 非受控组件 就是指输入框的值不受状态控制
 */
class Username extends Component{
    render(){
        return (
            <input
                value={this.props.data}
                onChange={this.props.handleChange}
                type="text"/>
        )
    }
}
export default connect('username')(Username);
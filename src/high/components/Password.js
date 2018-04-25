import React,{Component} from 'react';
/**
 * 受控组件 就是指输入框的值受状态控制
 * 非受控组件 就是指输入框的值不受状态控制
 */
class Username extends Component{
    state = {
        data:''
    }
    componentDidMount(){
       this.setState({
           data:localStorage.getItem('password')||''
       });
    }
    handleChange = (event)=>{
        let value = event.target.value;
        localStorage.setItem('password',value);
        this.setState({
            data:value
        });
    }
    render(){
        return (
            <input
                value={this.state.data}
                onChange={this.handleChange}
                type="text"/>
        )
    }
}
export default Username;
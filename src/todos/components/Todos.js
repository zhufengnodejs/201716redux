import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/todos';
class Todos extends Component{
    render(){
        return (
            <div>TODOS</div>
        )
    }
}
export default connect(
    state=>state,
    actions
)(Todos);

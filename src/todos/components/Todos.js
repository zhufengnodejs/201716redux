import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/todos';
import 'bootstrap/dist/css/bootstrap.css'
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
class Todos extends Component{
    render(){
        return (
            <div className="container" style={{marginTop:'20px'}}>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader
                                    addTodo = {this.props.addTodo}
                                />
                            </div>
                            <div className="panel-body">
                                <TodoList
                                    todos={this.props.todos}
                                />
                            </div>
                            <div className="panel-footer">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * 合并后的状态对象
 {
     todos：{
            todos:[{id:Date.now(),text:'买水',completed:false}]
     }
 }
 */
export default connect(
    state=>state.todos,
    actions
)(Todos);

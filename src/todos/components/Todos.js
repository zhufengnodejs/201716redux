import React,{Component} from 'react';
import {connect} from 'react-redux';
import todos_actions from '../store/actions/todos';
import filter_actions from '../store/actions/filter';
import 'bootstrap/dist/css/bootstrap.css'
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import * as filters from '../constants/filters';
import './Todos.css'
class Todos extends Component{
    render(){
        return (
            <div className="container" style={{marginTop:'20px'}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader
                                    addTodo = {this.props.addTodo}

                                />
                            </div>
                            <div className="panel-body">
                                <TodoList
                                    todos={this.props.todos}
                                    delTodo={this.props.delTodo}
                                    toggleTodo={this.props.toggleTodo}
                                    toggleAll={this.props.toggleAll}
                                />
                            </div>
                            <div className="panel-footer">
                                <TodoFooter
                                    todos={this.props.todos}
                                    filter={this.props.filter}
                                    changeFilter={this.props.changeFilter}
                                    delAllCompleted={this.props.delAllCompleted}
                                />
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
     },
     filter:{
            filter:'ALL'
     }
 }
 */
export default connect(
    state=>({
        todos:state.todos.todos.filter(todo=>{
            switch(state.filter.filter){
                case filters.COMPLETED:
                   return todo.completed;
                case filters.UNCOMPLETED:
                    return !todo.completed;
                default:
                    return true;
            }
        }),
        filter:state.filter.filter
    }),
    {
        ...todos_actions,
        ...filter_actions
    }
)(Todos);

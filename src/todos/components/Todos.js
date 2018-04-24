import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/todos';
import 'bootstrap/dist/css/bootstrap.css'
import TodoHeader from './TodoHeader';
class Todos extends Component{
    render(){
        return (
            <div className="container" style={{marginTop:'20px'}}>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader/>
                            </div>
                            <div className="panel-body">
                                <TodoList/>
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
export default connect(
    state=>state,
    actions
)(Todos);

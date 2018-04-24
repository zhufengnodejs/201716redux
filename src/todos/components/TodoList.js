import React,{Component} from 'react';
export default class TodoList extends Component{
    render(){
        return (
            <ul className="list-group">
                {
                  this.props.todos.map((todo,index)=>(
                      <li className="list-group-item" key={index}>{todo.text}</li>
                  ))
                }
            </ul>
        )
    }
}
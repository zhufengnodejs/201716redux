import React,{Component} from 'react';
export default class TodoList extends Component{
    render(){
        return (
            <ul className="list-group">
                {
                  this.props.todos.map((todo,index)=>(
                      <li className="list-group-item" key={index}>
                          <div class="checkbox">
                              <label>
                                  <input
                                      onChange={()=>this.props.toggleTodo(todo.id)}
                                      checked={todo.completed}
                                      type="checkbox"/>
                                  <span
                                      style={{textDecoration:todo.completed?"line-through":""}}
                                  >{todo.text}</span>
                              </label>
                              <button
                                  onClick={()=>this.props.delTodo(todo.id)}
                                  className="btn btn-xs btn-danger pull-right">删除</button>
                          </div>

                          </li>
                  ))
                }
            </ul>
        )
    }
}
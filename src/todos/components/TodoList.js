import React,{Component} from 'react';
export default class TodoList extends Component{
    render(){
        let allChecked = this.props.todos.length>0&&this.props.todos.every(todo=>todo.completed);
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="checkbox">
                        <label>
                            <input
                                onChange={(event)=>this.props.toggleAll(event.target.checked)}
                                checked={allChecked}
                                type="checkbox"/>{allChecked?'全消':'全选'}
                        </label>
                    </div>
                </li>
                {
                  this.props.todos.map((todo,index)=>(
                      <li className="list-group-item" key={index}>
                          <div className="checkbox">
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
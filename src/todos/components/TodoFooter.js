import React,{Component} from 'react';
export default class TodoFooter extends Component{
  render(){
      let unCompleted = this.props.todos.filter(todo=>!todo.completed).length;
      return (
          <div className="row">
              <div className="col-xs-3">
                  {unCompleted>0&&`有${unCompleted}件未完成事项`}
              </div>
              <div className="col-xs-7">

              </div>
              <div className="col-xs-2">
                <button
                    onClick={this.props.delAllCompleted}
                    className="btn btn-danger btn-xs">删除已完成</button>
              </div>
          </div>
      )
  }
}
/**
 * 1. 新建一个动作类型
 * 2. 修改reducer 增加对这个动作类型的处理
 * 3. 在actions里添加一个方法
 * 4. 在组件里传递并调用
*/
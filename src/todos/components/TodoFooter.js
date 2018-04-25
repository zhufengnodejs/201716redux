import React,{Component} from 'react';
export default class TodoFooter extends Component{
  render(){
      let unCompleted = this.props.todos.filter(todo=>!todo.completed).length;
      return (
          <div className="row">
              <div className="col-xs-3" style={{lineHeight:'30px'}}>
                  {unCompleted>0&&`有${unCompleted}件未完成事项`}
              </div>
              <div className="col-xs-6 ">
                <button className="btn btn-sm btn-default filter-button">全部</button>
                <button className="btn btn-sm btn-default filter-button">已完成</button>
                <button className="btn btn-sm btn-default filter-button">未完成</button>
              </div>
              <div className="col-xs-3">
                <button
                    onClick={this.props.delAllCompleted}
                    className="btn btn-danger btn-sm">删除已完成</button>
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
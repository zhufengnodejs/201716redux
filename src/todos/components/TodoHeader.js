import React,{Component} from 'react';
const ENTER_CODE = 13;
export default class TodoHeader extends Component{
    handleKeyDown = (event)=>{
        let code = event.keyCode;
        if(code === ENTER_CODE){
            let value = event.target.value;
            this.props.addTodo(value);
            event.target.value = '';
        }
    }

    render(){
      return (
          <input
              onKeyDown={this.handleKeyDown}
              type="text"
              className="form-control"/>
      )
    }
}
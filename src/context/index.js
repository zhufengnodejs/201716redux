import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Title extends Component{
    render(){
        return (
            <div>标题</div>
        )
    }
}
class Content extends Component{
    render(){
        return (
            <div>内容</div>
        )
    }
}
function Header(){
    return (
        <div>
            <Title/>
        </div>
    )
}
function Body(){
    return (
        <div>
            <Content/>
        </div>
    )
}
class Page extends Component{
  render(){
      return (
          <div>
              <Header/>
              <Body/>
          </div>
      )
  }
}
ReactDOM.render(<Page/>,document.querySelector('#root'))
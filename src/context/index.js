import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
class Title extends Component{
    //表示要从上下文对象中接收color属性
    static contextTypes = {
        color:propTypes.string
    }
    render(){
        console.log(this.context);
        return (
            <div style={{color:this.context.color}}>标题</div>
        )
    }
}
class Content extends Component{
    //表示要从上下文对象中接收color属性
    static contextTypes = {
        color:propTypes.string,
        changeColor:propTypes.func
    }
    render(){
        return (
            <div style={{color:this.context.color}}>
                内容
                <button onClick={()=>this.context.changeColor('green')}>变绿</button>
                <button onClick={()=>this.context.changeColor('yellow')}>变黄</button>
            </div>
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
  state = {color:'red'}
  //规定了下层上下文对象的名称和类型
  static childContextTypes = {
      color:propTypes.string,
      name:propTypes.string,
      changeColor:propTypes.func
  }
  changeColor = (color)=>{
      this.setState({color});
  }
  getChildContext(){
    return {name:'zfpx',color:this.state.color,changeColor:this.changeColor};
  }
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
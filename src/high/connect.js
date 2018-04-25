import React,{Component} from 'react';
export default function(key){
    return function(WrappedComponent){
       class Proxy extends Component{
           state = {
               data:''
           }
           componentDidMount(){
               this.setState({
                   data:localStorage.getItem(key)||''
               });
           }
           handleChange = (event)=>{
               let value = event.target.value;
               this.setState({
                   data:value
               },()=>{
                   localStorage.setItem(key,value)
               });
           }
           render(){
             return <WrappedComponent
                 handleChange={this.handleChange}
                 data={this.state.data}/>
           }
       }
       return Proxy;
    }
}
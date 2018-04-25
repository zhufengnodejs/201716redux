import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions';
import 'bootstrap/dist/css/bootstrap.css'
class Baidu extends Component{
    render(){
        return (
            <div className="container" style={{marginTop:'20px'}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <input
                                    onChange={event=>this.props.query(event.target.value)}
                                    type="text" className="form-control"/>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {
                                        this.props.words.map((word,index)=>(
                                           <li className="list-group-item" key={index}>{word}</li>
                                        ))
                                    }
                                </ul>
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
)(Baidu);

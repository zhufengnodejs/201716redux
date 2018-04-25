import React,{Component} from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'
class Baidu extends Component{
    render(){
        return (
            <div className="container" style={{marginTop:'20px'}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">

                            </div>
                            <div className="panel-body">

                            </div>
                            <div className="panel-footer">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(

)(Baidu);

import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import StartEdit from './startEditing.png';

class StartEditing extends Component {

    render() {    
        return (                
            <div class="container-fluid bg-primary">    
                <div class="row">
                    <div class="col-md-6 col-sm-12 order-2 order-md-1 pt-5">                       
                        <p className="text-white h2 ml-5">
                            {this.props.text}
                        </p>                        
                        <button type="button" class="btn btn-light ml-5 mt-4 p-2">Start editing a templete now!</button>
                    </div>
                    <div class="col-md-6 col-sm-12 order-1 order-md-2 pt-5">
                        <img src={StartEdit} alt="StartEditing" class="w-75 img-fluid " />
                    </div>
                </div>
            </div>
        );
    }
}

export default StartEditing;



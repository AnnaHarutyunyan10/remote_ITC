import React, { Component } from "react";
import flag from './flag.png';
import 'bootstrap/dist/css/bootstrap.css';
import "./mainPhoto.css";

class MainPhoto extends Component {
    
    render() {     
        return (
            <div>            
                <img src={this.props.link} className="my-width my-4 ml-4 p-5 shadow-sm rounded bg-light" />           
            </div>
        );
    }
}
  
export default MainPhoto;
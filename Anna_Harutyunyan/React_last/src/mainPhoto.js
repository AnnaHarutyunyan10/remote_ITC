import React, { Component } from "react";
import flag from './flag.png';
import 'bootstrap/dist/css/bootstrap.css';

class MainPhoto extends Component {
    
    render() {
      
        return (
            <div>            
                <img src={flag} className="my-4 p-5 shadow-sm rounded bg-light" />           
            </div>
        );
    }
}
  
export default MainPhoto;
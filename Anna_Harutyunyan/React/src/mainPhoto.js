import React, { Component } from "react";
import flag from './flag.png';

class MainPhoto extends Component {
    render() {
      
        return (
          <div>
            
              <img src={flag} className="my-4 px-5 border" />
            
          </div>
        );
    }
}
  
export default MainPhoto;
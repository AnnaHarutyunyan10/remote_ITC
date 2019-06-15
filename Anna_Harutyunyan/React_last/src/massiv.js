import React, { Component } from "react";

class Massiv extends Component {
  
  render() {
    
    return (
        <div>
          {/* es component-e piti masive vorpes props stana*/}
          <div>
            {this.props.mas.map((i) => <li key={i}>{i}</li>)}
          </div>
        </div>
    );
  }
}

export default Massiv;
import React, { Component } from "react";
import smile from './smile.png';
import { NavLink } from "react-router-dom/cjs/react-router-dom";

class Smilik extends Component {

  render() { 
    
    return (
        <div className="container bg-light rounded p-3  shadow-sm">
            <p className="text-dark h5">Red Stripes National Prayer Day Social Media Graphic</p>
            <div class="row">
            <div class="col-3">
                <img src={smile} className="w-100 rounded-circle" />
            </div>
            <div class="col-9">
                <span className="text-muted">Created by</span>
                <p><NavLink to="/smilik" className="my-link">Reychelle Ann Ignacio from Canva</NavLink></p>
            </div>
            </div>
        </div>
    );
  }
}

export default Smilik;
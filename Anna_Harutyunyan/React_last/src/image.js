import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './image.css';
import { NavLink } from "react-router-dom/cjs/react-router-dom";

class Image extends Component {

    render() {   

        return (                         
            <div class="content shadow-sm container bg-light rounded mb-4">
                <NavLink to="/footerButtom" target="">
                <div class="content-overlay"></div>
                <img class="content-image " src = {this.props.link} />
                <div class="content-details fadeIn-bottom">                        
                    <p class="content-text">{this.props.text}</p>
                </div>
                </NavLink>
            </div>                          
        );
    }
}
 
export default Image;
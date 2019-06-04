import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './image.css';

class Image extends Component {
    render() {    
        return (
            <div>
                <div class="container">
                    <div class="content">
                        <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
                        <div class="content-overlay"></div>
                        <img class="content-image" src = {this.props.link} />
                        <div class="content-details fadeIn-bottom">                        
                            <p class="content-text">{this.props.text}</p>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Image;
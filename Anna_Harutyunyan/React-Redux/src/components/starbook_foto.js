import React, { Component } from 'react';
import '.././styles/starbook_foto.scss';
 
class StarbookFirstPage extends Component {
 
    render () { 
        return (
            <div className="containerImage">
                <img src={this.props.starbookFoto} className={this.props.img_stayle} />
                <div id="text" className={this.props.text_style}>
                    <h1><i>{this.props.title}</i></h1>
                    <p>{this.props.text}</p>
                    <button className={this.props.btn_style}>{this.props.btn_text}</button>
                </div>
            </div>
        );
    }
}

export default StarbookFirstPage;

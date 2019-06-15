import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './registracion.css';
import RegWhitMail from "./RegWhitMail";
import logo1 from './logo1.png';
import RegWhitOther from "./regWhitOther";

class Registration extends Component {

    constructor(props) {
        super(props);
        this.loginWhitOther = this.loginWhitOther.bind(this);
        this.loginWhitMail = this.loginWhitMail.bind(this);
        this.state = {show: false};
    }
    
    loginWhitOther() {
    this.setState({show: true});
    }

    loginWhitMail() {
    this.setState({show: false});
    }  
    
    render() {
        const show = this.state.show;
        let button;

        if (show) {
            button = <RegWhitMail onClick={this.loginWhitMail} className="m-2" />;
        } else {
            button = <RegWhitOther onClick={this.loginWhitOther} className="m-2" />;
        }

        return (
        <div className="mt-5 mb-4">
            <img src={ logo1 } className="w-25 mx-auto d-block rounded-circle" 
                 onClick={this.loginWhitMail}
            />
            <div className="bg-light p-3 rounded shadow-sm">     
            <p className="text-center text-dark h4 mt-4">New to Canva?</p>
            <p className="text-center text-dark h4 mb-3">Sign up to use this templete</p> 
                {button}            
            <div className="m-3 my-text-heigth ">
                <p className="text-muted">By singing up you agree whit Canvas</p>
                <a href="#" className="my-link text-dark text-muted">Terms of Use</a>
                <span className="text-muted"> and </span>
                <a href="#" className="my-link text-dark text-muted">Privacy Policy</a>
            </div>
            </div>
        </div>
        );
    }
}

export default Registration;
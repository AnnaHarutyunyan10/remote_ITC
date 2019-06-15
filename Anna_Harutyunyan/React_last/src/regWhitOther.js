import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import LoginWhitGoogle from "./CLIENT/google";
import LoginWhitFacebook from "./CLIENT/facebook";

function RegWhitOther(props) {

    return (
        <div>               
            <div>
                <LoginWhitFacebook />
            </div>
            <div>
                <LoginWhitGoogle />
            </div>
            <div className="text-muted text-center"><i> or </i></div>
            <div> 
                <input type="submit" value="Sign up whit Email" className="p-2 btn btn-success w-100 my-1"
                        onClick={props.onClick}
                    />                 
            </div>
        </div>  
    );    
}
  
export default RegWhitOther;
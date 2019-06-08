import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import RegWhitMail from "./RegWhitMail";
//import "font-awesome/css/font-awesome.css";

function RegWhitOther(props) {
  
    return (
        <div>               
            <div>
                <input type="submit" value="Sign up whit Facebook" className="p-2 btn btn-primary w-100 my-1" />
            </div>
            <div>
                <input type="submit" value="Sign up whit Google" className="p-2 btn btn-danger w-100 my-1" />
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
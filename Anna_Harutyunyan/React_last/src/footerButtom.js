import React, { Component } from "react";
import "./footerButtom.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

class FooterButtom extends Component {

    render() {    
        return (       
            <footer className="my-footer-bg p-4 pl-5">           
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-md-7 col-sm-6 text-md-left">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><a href="#" className="btn-floating btn-sm btn-fb mx-1 text-white"><i className="fa fa-facebook my-icon-hover"> </i></a></li>
                                <li className="list-inline-item"><a href="#" className="btn-floating btn-sm btn-tw mx-1 text-white"><i className="fa fa-twitter my-icon-hover"> </i></a></li>
                                <li className="list-inline-item"><a href="#" className="btn-floating btn-sm btn-gplus mx-1 text-white"><i className="fa fa-google-plus my-icon-hover"> </i></a></li>
                                <li className="list-inline-item"><a href="#" className="btn-floating btn-sm btn-li mx-1 text-white"><i className="fa fa-linkedin my-icon-hover"> </i></a></li>
                                <li className="list-inline-item"><a href="#" className="btn-floating btn-sm btn-dribbble mx-1 text-white"><i className="fa fa-dribbble my-icon-hover"> </i></a></li>
                            </ul> 
                        </div>
                        <div class="text-md-right col-md-5 col-sm-6 text-light text-muted">                                               
                            &copy; {(new Date().getFullYear())} Copyright Canva                                                    
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterButtom;
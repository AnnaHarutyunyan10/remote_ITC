import React, { Component } from 'react';
import './header.css';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component {
   
    render() {
        const block1 = ['Logo', 'Posters', 'Business Cards', 'Flyers', 'Resumes', 'Infographics'];
        const block2 = ['Graphs', 'Photo Editing', 'Print'];
        const block3 = ['Teachers', 'Nonprofits', 'Students', 'Design', 'Photography', 'Business'];
        
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-default navbar-light bg-primary">
                    <img src={ logo } className="canva_light rounded-circle" />
                    
                    <a className="navbar-brand text-white px-3" href="#">Templates</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                            <div className="submenu-show">
                                <li className="nav-item">
                                    <a className="nav-link text-white px-3" href="#">Browse</a>        
                                </li>
                                <div className="submenu-hide my-bg">
                                    <p className="font-weight-bold p-2">Design Types</p>
                                    {block1.map(color => (
                                        <li className="">
                                        <a className="submenu" href="#" key={color}>
                                            {[color]}
                                        </a>
                                        </li>
                                    ))}
                                </div>
                            </div>                         
                            <div className="submenu-show">
                                <li className="nav-item">
                                    <a className="nav-link text-white px-3" href="#">Features</a>        
                                </li>
                                <div className="submenu-hide my-bg">                                    
                                    {block2.map(color => (
                                        <li className="">
                                        <a className="submenu" href="#" key={color}>
                                            {[color]}
                                        </a>
                                        </li>
                                    ))}
                                </div>
                            </div>   
                            <div className="submenu-show">
                                <li className="nav-item">
                                    <a className="nav-link text-white px-3" href="#">Learn</a>    
                                </li>
                                <div className="submenu-hide my-bg">                                   
                                    {block3.map(color => (
                                        <li className="">
                                        <a className="submenu" href="#" key={color}>
                                            {[color]}
                                        </a>
                                        </li>
                                    ))}
                                </div>
                            </div>    
                            <li className="nav-item">
                                <a className="nav-link text-white px-3" href="#">Pro</a>
                            </li>  
                            <li className="nav-item">
                                <button type="button" className="btn navbar-btn btn-light p-2">Sign Up</button>
                            </li>   
                        </ul>
                    </div>  
                </nav>
           </div>
        );
    }
}

export  default Header;
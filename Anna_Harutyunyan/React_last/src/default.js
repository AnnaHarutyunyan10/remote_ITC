import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import Gallery from "./gallery";
import Registration from "./registration";
import Smilik from "./smilik";
import Search from "./search";
import FooterTop from "./footerTop";
import FooterButtom from "./footerButtom";
import StartEditing from "./startEditing";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import List from "./list"; 

class Default extends Component {

  render() { 
    const buttonStyle = {
      btn: 'btn navbar-btn btn-light p-2',
      bg: 'bg-primary',
      txt: 'navbar-brand px-3 text-white',
      linkTxt: 'nav-link text-white px-3',
    };
    return (
        <NavLink to="/">
        <div className="background">
        <Header btnStyles={ buttonStyle.btn } 
                navText={ buttonStyle.txt } 
                linkTxt={ buttonStyle.linkTxt } 
                backgroundNavBar={ buttonStyle.bg } />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8">
                <Gallery />
              </div>
              <div className="col-sm-4">
                <Registration />  
                <Smilik />    
                <Search placeholder="Search 50,000 templates" />  
                <List />
              </div>
            </div>
          </div> 
          <StartEditing text="The best curated collection of high-quality 
                              design templates for all your graphic needs."/>
          <div className="my-hover">
            <FooterTop />
            <FooterButtom />          
          </div>  
        </div>
        </NavLink>
    );
  }
}

export default Default;
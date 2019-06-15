import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./header";
import SmileGallery from "./smile_gallery";
import Massiv from "./massiv";
import SearchField from 'react-search-field';

class PageSmile extends Component {
  
  render() { 
    const buttonStyle = {
      btn: 'btn navbar-btn btn-primary p-2',
      bg: 'bg-light',
      txt: 'navbar-brand px-3 d-none',
      linkTxt: 'nav-link text-dark px-3',
      search: <div className="ml-4">
                <SearchField 
                  placeholder="Search item"
                // className="form-control-file border p-2 rounded"
                // onEnter={onEnter}
                />  
              </div>      
    };
    
    const arr = ['a', 'b'];
    return (
        <div>
          <Header btnStyles={ buttonStyle.btn } 
                  navText={ buttonStyle.txt } 
                  linkTxt={ buttonStyle.linkTxt } 
                  backgroundNavBar={ buttonStyle.bg } 
                  search={ buttonStyle.search }
                  />
          <div className="m-4">
            <Massiv mas={ arr }></Massiv>
            <SmileGallery text="Marketeplace Desingers" />
          </div>
        </div>
    );
  }
}

export default PageSmile;
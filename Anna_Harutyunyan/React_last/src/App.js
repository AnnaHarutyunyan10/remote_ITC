import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import MainPhoto from "./mainPhoto";
import Gallery from "./gallery";
import Registration from "./registration";
import Smilik from "./smilik";
import Search from "./search";

class App extends Component {

  render() { 
    
    return (
      <div className="background">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <MainPhoto />
              <Gallery />
            </div>
            <div className="col-sm-4">
              <Registration />  
              <Smilik />    
              <Search placeholder="Search 50,000 templates" />  

            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;
import React, { Component } from "react";
import './App.css';
import Header from "./header";
import MainPhoto from "./mainPhoto";
import Gallery from "./gallery";
import Registration from "./registracion";


class App extends Component {

  render() { 
    
    return (
      <div className="background">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <MainPhoto />
            </div>
            <div className="col-sm-4">
              <Registration />
            </div>
          </div>
        </div>

        

        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-8">
              <Gallery />
            </div>    
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
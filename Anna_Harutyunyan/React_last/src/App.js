import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import MainPhoto from "./mainPhoto";
import Gallery from "./gallery";
import Registration from "./registration";
import Smilik from "./smilik";
import Search1 from "./search";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {username: '', zipcode: '88'};
    
  }

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
              <Search1 username={this.state.username} zipcode={this.state.zipcode}/>  

            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;
import React, { Component } from "react";
import Header from "./header";
import Smilik from "./smilik";
import { BrowserRouter, Route } from "react-router-dom";
import List from "./list";

class SecondPage extends Component {
  
  render() { 
    return ( 
        <div>
          <Header />
          <Smilik /> 
          <List />
        </div>
    );
  }
}

export default SecondPage;
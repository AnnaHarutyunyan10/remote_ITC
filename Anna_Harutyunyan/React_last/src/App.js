import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SecondPage from "./secondPage";
import Default from "./default";
import PageSmile from "./page_Smile";

class App extends Component {

  render() { 
    const keys = [
      ['School', SecondPage],
      ['Photo', SecondPage],
      ['Campaign', SecondPage],
      ['Motivational', SecondPage],
      ['Black And White', SecondPage],
      ['Event', SecondPage],
      ['Advertising', SecondPage],
      ['Schools', SecondPage],
      ['Photo1', SecondPage],
      ['Quote', SecondPage],
      ['Campaigns', SecondPage],
      ['Motivationals', SecondPage],
      ['Black And White1', SecondPage],
      ['Art & Design', SecondPage],
      ['Fashion', SecondPage],
      ['Band', SecondPage],
      ['Computer', SecondPage],
      ['Food & Drink', SecondPage],
      ['Education', SecondPage],
      ['Sports', SecondPage],
      ['Restaurant', SecondPage],
      ['Cafe', SecondPage],
      ['Creative', SecondPage],
      ['Simple', SecondPage],
      ['Education1', SecondPage],
      ['Business', SecondPage],
      ['Events', SecondPage],
      ['Marketing', SecondPage],
      ['Promotional', SecondPage],
      ['Birthday', SecondPage],
      ['Thank You', SecondPage],
      ['Invitation', SecondPage],
      ['Greeting', SecondPage],
      ['Photo2', SecondPage],
      ['Education2', SecondPage],
      ['Process', SecondPage],
      ['Photography', SecondPage],
      ['Yoga', SecondPage],
      ['Music', SecondPage],
      ['DJ', SecondPage],
      ['Professional', SecondPage],
      ['Modern', SecondPage],
      ['Simples', SecondPage],
      ['Mood Boards', SecondPage],
      ['Fashions', SecondPage],
      ['Travel', SecondPage],
      ['Art', SecondPage],
      ['Birthdays', SecondPage],
      ['Cool', SecondPage],
      ['Pet', SecondPage]
    ];

    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Default} />         
          {keys.map((i) => 
            {return <Route path={`/${i[0]}`} component={i[1]} />  })} 
            <Route exact path="/smilik" component={PageSmile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
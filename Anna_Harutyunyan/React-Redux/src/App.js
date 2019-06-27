import React, { Component } from 'react';
import PageFirst from './page_components/page-first';
import PageCardsAdd from './page_components/page_cards_add';
import { Route, BrowserRouter } from "react-router-dom";

class App extends Component {
 
    render () {
        return (
            <BrowserRouter>
                <div className="bg-light">
                    <Route exact path="/" component={PageFirst} />
                    <Route path="/addCard" component={PageCardsAdd} />
                </div>
            </BrowserRouter>
        );
    } 
}

export default App;

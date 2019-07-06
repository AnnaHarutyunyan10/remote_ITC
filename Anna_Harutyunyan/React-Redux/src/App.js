import React, { Component } from 'react';
import PageFirst from './page_components/page-first';
import PageCardsAdd from './page_components/page_cards_add';
import { Route, BrowserRouter, Router } from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute'
import { LogInOut } from './components/LogInOut/LogInOut';
import { HomePage } from './components/HomePage';
import { RegisterPage } from './components/RegisterPage';
import { LoginPage } from './components/LoginPage';
import { history } from './helpers/history';

class App extends Component {

    render () {
        return (
            <Router history={history}>
                <div className="bg-light">
                    <Route exact path="/" component={PageFirst} />
                    <Route path="/addCard" component={PageCardsAdd} />
                    <PrivateRoute exact path="/home" component={HomePage} />
                    <Route path="/login" component={LogInOut} />
                    <Route path="/register" render={() => <RegisterPage />} />                   
                </div>
            </Router>
        );
    } 
}

export default App;

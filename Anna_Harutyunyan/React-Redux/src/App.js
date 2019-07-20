import React, { Component, Suspense, lazy } from 'react';
import { Route, BrowserRouter, Router } from "react-router-dom";
import { PrivateRoute } from './components/privateRoute/PrivateRoute';
import { LogInOut } from './components/page/LogInOut/LogInOut'; 
import { HomePage } from './components/page/HomePage/HomePage';
import { RegisterPage } from './components/page/RegisterPage';
import { history } from './helpers/history';

const PageFirst = lazy(() => import('./components/page/FirstPage/FirstPage'));
const PageCardsAdd = lazy(() => import('./components/page/CardsPage/CardsPage'));
const MapPage = lazy(() => import('./components/page/Map/MapPage'));
const Forms = lazy(() => import('./components/componentsWhitHooks/formWhitHooks/form'));

class App extends Component {

    render () {
        return (           
            <Router history={history}>
                <Suspense fallback={<div>Loading...</div>}>
                    <div className="bg-light">
                        <Route exact path="/" component={PageFirst} />
                        <Route path="/addCard" component={PageCardsAdd} />
                        <PrivateRoute exact path="/home" component={HomePage} />
                        <Route path="/login" component={LogInOut} />
                        <Route path="/register" render={() => <RegisterPage />} /> 
                        <Route path="/map" component={MapPage} />
                        <Route path="/hook_form" component={Forms} />             
                    </div>                    
                </Suspense>
            </Router>           
        );
    } 
}

export default App;

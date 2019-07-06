import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../helpers';
import { alertActions } from '../../actions';
import { PrivateRoute } from '../PrivateRoute';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

class LogInOut extends Component {

    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <React.Fragment>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <div>
                        {/*<PrivateRoute exact path="/" component={HomePage} />*/}
                        <Route path="/login" component={LoginPage} />
                        {/*<Route path="/register" component={RegisterPage} />*/}
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(LogInOut);
export { connectedApp as LogInOut }; 
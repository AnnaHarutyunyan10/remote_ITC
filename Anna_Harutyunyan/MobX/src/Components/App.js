import React, { Component, Fragment } from 'react';
import Form from './form';
import { state } from './form';

class App extends Component {

    render() {
        return (
            <Fragment>
                <Form appState={state} />
            </Fragment>
        );
    }
}

export default App;
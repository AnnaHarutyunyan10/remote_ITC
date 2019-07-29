import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { observable, computed, extendObservable, configure, action, decorate, when} from 'mobx';
import { observer } from 'mobx-react';

configure({enforceActions: "observed"});

class AppState {

    info = [
        {
            myValue: ''
        },
    ];

    handleChange(e) {    
        this.info[0].myValue = e.target.value;
    };    
}

decorate(AppState, {
    info: observable,
    handleChange: action
});

export const state = new AppState();

@observer class Form extends Component {

    handle = (e) => {this.props.appState.handleChange(e)};

    render() {
        const { appState } = this.props;
        return (
            <form onSubmit={() => alert(`User name is: ${appState.info[0].myValue}`)} >
                <input value={appState.info[0].myValue} onChange={this.handle} placeholder="enter name" /> <br /> <br />
                <input type="email" placeholder="mail" required /> <br /> <br />
                <input type="password" placeholder="password" required /> <br /> <br />
                <input type="submit" value="Click" />
            </form>
        );
    }
}

export default Form;

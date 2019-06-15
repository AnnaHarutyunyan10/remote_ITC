import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import {PostData} from './post_data';
import {Redirect} from 'react-router-dom';

class LoginWhitFacebook extends Component {

    constructor(props) {
        super(props);
        this.state = { 
        loginError: false,
        redirect: false
        };
        this.signup = this.signup.bind(this);
    }
    signup(res, type) {
        let postData;
        if (type === 'facebook' && res.email) {
        postData = {
            name: res.name,
            provider: type,
            email: res.email,
            provider_id: res.id,
            token: res.accessToken,
            provider_pic: res.picture.data.url
        };
    }
    if (type === 'google' && res.w3.U3) {
        postData = {
            name: res.w3.ig,
            provider: type,
            email: res.w3.U3,
            provider_id: res.El,
            token: res.Zi.access_token,
            provider_pic: res.w3.Paa
        };
    }
    if (postData) {
        PostData('signup', postData).then((result) => {
            let responseJson = result;
            sessionStorage.setItem("userData", JSON.stringify(responseJson));
            this.setState({redirect: true});
        });
        } else {}
    }

    render() {
        if (this.state.redirect || sessionStorage.getItem('userData')) {
            return (<Redirect to={'/home'}/>)
        }
        const responseFacebook = (response) => {
            console.log("facebook console");
            console.log(response);
            this.signup(response, 'facebook');
        }  
    
        return (
        <div>
            <FacebookLogin
                appId="724772631273561"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="my-facebook-button-class text-left w-100 text-white bg-primary p-3 rounded border border-0" 
                icon="fa-facebook" 
                scope="public_profile,user_friends,user_actions.books,facebook"
            />
        </div>
        );
    }
}

export default LoginWhitFacebook;
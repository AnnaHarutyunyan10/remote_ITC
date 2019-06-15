import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import {PostData} from './post_data';
import {Redirect} from 'react-router-dom';

class LoginWhitGoogle extends Component {
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
    const responseGoogle = (response) => {
      console.log("google console");
      console.log(response);
      this.signup(response, 'google');
    }

    return (
      <div>
        <GoogleLogin
          clientId="72795245718-6vgvsodm4d63slnjeh02g15s80d8hpdg.apps.googleusercontent.com"
          buttonText="Sign up with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle} 
          className="p-1 rounded text-white text-center bg-danger w-100 my-1"
        />
      </div>
    );
  }
}

export default LoginWhitGoogle;
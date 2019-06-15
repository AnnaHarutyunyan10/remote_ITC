import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';

class RegWhitMail extends Component {

  constructor(props) {
    super(props);
    this.state = {
        login: '', password: '', confrim: '', name: ''
      };

    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeConfrim = this.onChangeConfrim.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(event) {
    let mail = document.getElementById('mail').value
    let confrim_mail = document.getElementById('c_mail').value
    if(mail !== confrim_mail) {
        alert(`Wrong confirm password !`);
    } else {     
        alert(`${this.state.login}, Welcome!`);
        event.preventDefault();   
    }
  }

  onChangePassword(event){
    this.setState({password: event.target.value});
  }
  
  onChangeLogin(event) {
    this.setState({login: event.target.value});
  }

  onChangeConfrim(event) {
    this.setState({confrim: event.target.value});
  }

  onChangeName(event) {
    this.setState({name: event.target.value});
  }

  render() {

    return (
      <div className="bg-light">
        <form onSubmit={this.onSubmit}>        
          <input type="text" name="name" placeholder="Full Name" value={this.state.name}
                  onChange={this.onChangeName} className="form-control-file border p-3 rounded-top"/>           
          <input type="email" name="login" placeholder="Email" value={this.state.login} 
                  onChange={this.onChangeLogin} className="form-control-file border p-3" id="mail" />          
          <input type="email" name="confrim" placeholder="Confrim Email" value={this.state.confrim}
                  onChange={this.onChangeConfrim} className="form-control-file border p-3" id="c_mail" />               
          <input type="password" name="password" placeholder="Passward" value={this.state.password}
                      onChange={this.onChangePassword} className="form-control-file border p-3 rounded-bottom"/>        
          <div className="border p-4 mt-1 mb-2 rounded">
            <input type="checkbox" />            
            I'm not a robot
          </div>
          <p>
            <input type="submit" value="Sign up" className="p-2 btn btn-success w-100" />
          </p>
        </form>
      </div>
    );
  }
}
  
export default RegWhitMail;
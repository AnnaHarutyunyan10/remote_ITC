import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './registracion.css';

class Registration extends React.Component {

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
  
  onSubmit(event){
    alert(`${this.state.login}, добро пожаловать!`);
    event.preventDefault();
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
      <div className="bg-light pt-5 pb-4 m-5">
        <p>New to Canva?</p>
        <p>Sign up to use this templete</p>
        <form onSubmit={this.onSubmit}>        
          <input type="text" name="name" placeholder="Full Name" value={this.state.name}
                  onChange={this.onChangeName} className="form-control-file border p-3 rounded-top bg-dark"/>           
          <input type="email" name="login" placeholder="Email" value={this.state.login}
                  onChange={this.onChangeLogin} className="form-control-file border p-3" />          
          <input type="text" name="confrim" placeholder="Confrim Email" value={this.state.confrim}
                  onChange={this.onChangeConfrim} className="form-control-file border p-3"/>               
          <input type="password" name="password" placeholder="Passward" value={this.state.password}
                      onChange={this.onChangePassword} className="form-control-file border p-3 rounded-bottom"/>        
          <p>
            <label> 
              <input type="checkbox" name="check" />
              I'm not a robot
            </label>
          </p>
          <p>
            <input type="submit" value="Sign up" className="p-2 btn btn-success w-100" />
            <div className="m-3 my-text-heigth ">
              <p className="text-muted">By singing up you agree whit Canvas</p>
              <a href="#" className="my-link text-dark text-muted">Terms of Use</a>
              <span className="text-muted"> and </span>
              <a href="#" className="my-link text-dark text-muted">Privacy Policy</a>
            </div>
          </p>
          


        </form>
      </div>
    );
  }
}
  
export default Registration;
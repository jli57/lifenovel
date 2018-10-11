import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as DateUtil from '../../util/date_util';
import BirthDate from './birth_date';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      gender: "",
      year: "",
      month: "",
      day: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.setBirthDate = this.setBirthDate.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  demoLogin(e) {
    this.props.login({email: "demo-user@gmail.com", password: "password"})
      .then( this.props.fetchPosts() );
  }

  changeProperty(prop) {
    return (e) => {
      this.setState({ [prop]: e.target.value });
    }
  }

  update(prop, val) {
    this.setState({ [prop]: val});
  }

  setBirthDate({year, month, day}) {
    // console.log(`${year}-${month}-${day}`);
    this.setState({birth_date: `${year}-${month}-${day}` });
  }

  render() {
    return (
      <div className="center">
        <div className="signup-form-container">
          <h1>{ this.props.location.pathname === "/signup" ? "Create a New Account" : "Sign Up"} </h1>
          <h2>It’s free and always will be.</h2>
          <form className="signup-form" onSubmit={ this.handleSubmit }>
            <div className="full-name">
              <input
                type="text"
                className="first-name"
                onChange={ this.changeProperty("first_name")}
                value={this.state.first_name}
                placeholder="First name"
                />
              <input
                type="text"
                className="last-name"
                onChange={ this.changeProperty("last_name")}
                value={this.state.last_name}
                placeholder="Last name"
                />
            </div>
            <div>
              <input
                type="text"
                onChange={ this.changeProperty("email")}
                value={this.state.email}
                placeholder="Email or mobile number"
                />
            </div>
            <div>
              <input
                type="password"
                onChange={ this.changeProperty("password") }
                value={this.state.password}
                placeholder="New password"
                />
            </div>
            <BirthDate birthDate={this.state.birth_date} update={this.update}/>
            <div className="gender" id="gender">
              <span>
                <input
                  type="radio"
                  name="gender"
                  onChange={ this.changeProperty("gender")}
                  value="F"/>
                <label htmlFor="gender">Female</label>
              </span>
              <span>
                <input
                  type="radio"
                  name="gender"
                  onChange={ this.changeProperty("gender")}
                  value="M"/>
                <label htmlFor="gender">Male</label>
              </span>
            </div>
            <p>
              By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
            </p>
            <div className="flex">
              <button className="signup-btn" type="submit">Sign Up</button>
              <button className="signup-btn" type="button" onClick={ this.demoLogin }>Demo User</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default withRouter(SignupForm);

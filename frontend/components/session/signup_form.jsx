import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as DateUtil from '../../util/date_util';
import BirthDate from './birth_date';
import SignUpInput from './sign_up_input';

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

  componentWillReceiveProps(nextProps) {
      if ( nextProps.currentUser ) {
        this.props.history.push("/");
      }
    }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  demoLogin(e) {
    this.props.login({email: "demo-user@gmail.com", password: "password"});
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
    this.setState({birth_date: `${year}-${month}-${day}` });
  }

  render() {
    const genderIconClass = this.props.sessionErrors.includes("gender") ? "" : " hidden";
    const genderInputClass = this.props.sessionErrors.includes("gender") ? "invalid" : "";

    return (
      <div className="center">
        <div className="signup-form-container">
          <h1>{ this.props.location.pathname === "/signup" ? "Create a New Account" : "Sign Up"} </h1>
          <h2>It’s free and always will be.</h2>
          <form className="signup-form" onSubmit={ this.handleSubmit }>
            <div className="full-name">
              <SignUpInput update={this.update}
                fieldName="first_name"
                fieldValue={ this.state.first_name}
                fieldType="text"
                fieldHelpText="What's your name?"
                fieldPlaceHolder="First name"
                sessionErrors={ this.props.sessionErrors }/>
              <SignUpInput update={this.update}
                fieldName="last_name"
                fieldValue={ this.state.last_name }
                fieldHelpText="What's your name?"
                fieldPlaceHolder="Last name"
                sessionErrors={ this.props.sessionErrors }/>
            </div>
            <div>
              <SignUpInput update={this.update}
                fieldName="email"
                fieldValue={ this.state.email }
                fieldType="text"
                fieldHelpText="You'll use this when you log in and if you ever need to reset your password"
                fieldPlaceHolder="Email or mobile number"
                sessionErrors={ this.props.sessionErrors }/>
            </div>
            <div>
              <SignUpInput update={this.update}
                fieldName="password"
                fieldType="password"
                fieldValue={ this.state.password }
                fieldHelpText="Enter a combination of at least six numbers, letters, and punctuation marks (like ! and \&)."
                fieldPlaceHolder="New Password"
                sessionErrors={ this.props.sessionErrors }/>
            </div>
            <div className="birthday">
              <h1 className="birthday-header">Birthday</h1>
              <BirthDate
                birthDate={this.state.birth_date}
                update={this.update}
                sessionErrors={ this.props.sessionErrors }/>
            </div>
            <div className="gender field-set">
              <div className={ genderInputClass }>
                <input
                  type="radio"
                  name="gender"
                  onChange={ this.changeProperty("gender")}
                  value="F"/>
                <label htmlFor="gender">Female</label>
              </div>
              <div className={ genderInputClass }>
                <input
                  type="radio"
                  name="gender"
                  onChange={ this.changeProperty("gender")}
                  value="M"/>
                <label htmlFor="gender">Male</label>
              </div>
              <i className={ "fas fa-exclamation-circle" + genderIconClass }></i>
            </div>
            <p>
              By clicking Sign Up, you agree to our <Link to="/update">Terms, </Link>
            <Link to="/update">Data Policy, </Link> and <Link to="/update">Cookies Policy. </Link>
                You may receive SMS Notifications from us and can opt out any time.
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

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as DemoUtil from '../../util/demo_util';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.currentUser ) {
      this.props.history.push("/");
    } 
  }

  handleSubmit(...args) {
    if ( args.length > 0 ) {
      args[0].preventDefault();
    }
    const user = Object.assign({}, this.state);
    this.props.login(user)
      .then( null,
       () => this.props.history.push("/login"));
  }

  changeProperty(prop) {
    return (e) => {
      this.setState({[prop]: e.target.value });
    }
  }

  demoLogin(e) {
    e.preventDefault();
    DemoUtil.fillProperty.call( this, DemoUtil.EMAIL, "email", 100, () => {
      DemoUtil.fillProperty.call( this, DemoUtil.PASSWORD, "password", 100, () => {
        this.handleSubmit();
      });
    });

  }

  render() {

    const email_input = (
      <input
        type="text"
        onChange={ this.changeProperty("email")}
        value={this.state.email}
        placeholder={ this.props.header ? "" : "Email or Phone Number"}
      />
    );

    const password_input = (
      <input
        type="password"
        onChange={ this.changeProperty("password") }
        value={this.state.password}
        placeholder={ this.props.header ? "" : "Password"}
      />
    );

    const submit_input = (
      <input
        className="header-btn"
        type="submit"
        value="Log In"
      />
    );

    const demo_login = (
      <button onClick={ this.demoLogin }>Demo Login</button>
    );

    const forgot_account = (
      <Link className="small-link" to="/">Forgot account?</Link>
    );

    const header_form = (
      <form className="header-login-form" onSubmit={ this.handleSubmit }>
        <table>
          <tbody>
            <tr>
              <td><label>Email or Phone</label></td>
              <td><label>Password</label></td>
            </tr>
            <tr>
              <td>{ email_input }</td>
              <td>{ password_input }</td>
              <td>{ submit_input }</td>
            </tr>
            <tr>
              <td>{ demo_login }</td>
              <td>{ forgot_account }</td>
            </tr>
          </tbody>
        </table>
      </form>
    );

    const login_page = (
      <form className="login-form">
        <h1> Log into Livenovel </h1>
        <div className="error">{ this.props.sessionErrors }</div>
        { email_input }
        { password_input }
        { submit_input }
        <p><span>or</span></p>
        <Link to="/singup">Create New Account</Link>
        { demo_login }
        { forgot_account }

      </form>
    )

    return this.props.header ? header_form : login_page;

  }

}

export default LoginForm;

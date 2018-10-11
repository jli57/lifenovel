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

  handleSubmit(...args) {
    if ( args.length > 0 ) {
      args[0].preventDefault();
    }
    const user = Object.assign({}, this.state);
    this.props.login(user)
      .then( this.props.fetchPosts() )
      .then( this.props.history.push("/"));
  }

  changeProperty(prop) {
    return (e) => {
      this.setState({[prop]: e.target.value });
    }
  }
  
  demoLogin(e) {
    e.preventDefault();
    DemoUtil.fillProperty.call( this, DemoUtil.EMAIL, "email", 50, () => {
      DemoUtil.fillProperty.call( this, DemoUtil.PASSWORD, "password", 50, () => {
        this.handleSubmit();
      });
    });

  }

  render() {
    return (
      <form className="login-form" onSubmit={ this.handleSubmit }>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="email">Email or Phone</label>
              </td>
              <td>
                <label htmlFor="password">Password</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  id="email"
                  type="text"
                  onChange={ this.changeProperty("email")}
                  value={this.state.email}
                  />
              </td>
              <td>
                <input
                  id="password"
                  type="password"
                  onChange={ this.changeProperty("password") }
                  value={this.state.password}
                  />
              </td>
              <td>
                <input
                  className="header-btn"
                  type="submit"
                  value="Log In"
                  />
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={ this.demoLogin }>Demo Login</button>
              </td>
              <td>
                <Link to="/">Forgot account?</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    )
  }

}

export default LoginForm;

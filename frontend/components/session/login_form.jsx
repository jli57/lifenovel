import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user)
      .then( this.props.fetchPosts() );
  }

  changeProperty(prop) {
    return (e) => {
      this.setState({[prop]: e.target.value });
    }
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
              <td></td>
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

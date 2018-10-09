import React from 'react';
import { Link } from 'react-router-dom';
import * as DateUtil from '../../util/date_util';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      gender: "",
      mobile_number: "",
      year: "",
      month: "",
      day: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    user = {};
    this.props.signup();
  }

  changeProperty(prop) {
    return (e) => {
      this.setState({ [prop]: e.target.value });
      if ( e.target.value  === "" ) {
        e.target.addClass("invalid")
      }
    }
  }

  render() {
    return (
      <div className="signup-form-container">
        <h1>Sign Up</h1>
        <h2>It’s free and always will be.</h2>
        <form className="signup-form" onSubmit={ this.handleSubmit }>
            <div id="full-name">
              <input
                type="text"
                id="first-name"
                onChange={ this.changeProperty("first_name")}
                value={this.state.first_name}
                placeholder="First name"
              />
              <input
                type="text"
                id="last-name"
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
            <div id="birthday">
              <div id="birthday-header">Birthday</div>
              <div>
                <select id="month">
                  <option value="" defaultValue>Month</option>
                  { Object.keys(DateUtil.MONTHS).map( month => (
                    <option
                      key={month}
                      onChange={ this.changeProperty("month")}
                      value={month}
                      >
                      { DateUtil.MONTHS[month] }
                    </option>
                  ))}
                </select>
                <select id="day">
                  <option value="" defaultValue>Day</option>
                  { DateUtil.DAYS().map( day => (
                    <option
                      key={day}
                      onChange={ this.changeProperty("day")}
                      value={day}
                      >
                      { day }
                    </option>
                  ))}
                </select>
                <select id="year">
                  <option value="" defaultValue>Year</option>
                  { DateUtil.YEARS().map( year => (
                    <option
                      key={year}
                      onChange={ this.changeProperty("year")}
                      value={year}
                      >
                      { year }
                    </option>
                  ))}
                </select>
                <div id="birthday-help">
                  <a className="f12"
                    href="#"
                    title="Click for more information"
                  >Why do I need to provide my birthday?</a>
                </div>
              </div>
            </div>
            <div id="gender">
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
            <div>
              <button type="submit">Sign Up</button>
            </div>
        </form>
      </div>
    )
  }

}

export default SignupForm;

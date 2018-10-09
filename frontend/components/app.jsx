import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Intro from './main/intro';

const App = () => (
  <div>
    <div className="nav-bar-container">
      <nav className="nav-bar">
        <Link to="/" className="logo">
          <h1>lifenovel</h1>
        </Link>
        <Switch>
          <Route to="/login" component={LoginFormContainer} />
        </Switch>
      </nav>
    </div>
    <main>
      <Switch>

      </Switch>
      <div className="main-content">
        <Route to="/" component={Intro} />
        <Route to="/signup" component={SignupFormContainer} />
      </div>
    </main>
  </div>
)

export default App;

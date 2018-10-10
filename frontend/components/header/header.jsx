import React from 'react';
import { Link, Route } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import logo from '../../../app/assets/images/logo_white.png';

const Header = ({ currentUser, logout }) => {
  const loggedOut = () => (
    <header className="nav-bar-container">
      <nav className="nav-bar">
        <Link to="/" className="logo">
          <h1>lifenovel</h1>
        </Link>
        <Route to="/login" component={LoginFormContainer} />
      </nav>
    </header>
  )
  const loggedIn = () => (
    <header className="user-nav-bar-container">
      <nav className="user-nav-bar">
        <Link to="/" className="logo">
          <img id="home" src={ logo } />
        </Link>

        <button className="header-btn" onClick={ logout }>Logout</button>
      </nav>
    </header>
  )
  return currentUser ? loggedIn() : loggedOut();

}

        // <SearchContainer />

export default Header;

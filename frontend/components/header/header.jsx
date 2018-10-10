import React from 'react';
import { Link, Route } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container';
import SearchBarContainer from '../search/search_bar_container';
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
        <div className="left-nav-bar">
          <Link to="/" >
            <img id="home" src={ logo } />
          </Link>
          <SearchBarContainer />
        </div>
        <div className="right-nav-bar flex">

          <div className="nav-links flex">

            <div>
              <Link className="nav-link" to={`/${currentUser.id}`}>{ currentUser.first_name }</Link>
            </div>
            <div>
              <Link className="nav-link" to="/">Home</Link>
            </div>
           <div>
              <Link className="nav-link" to="#">Create</Link>
            </div>

            <div className="nav-icons flex">
                <i tabIndex="1" className="fas fa-user-friends nav-icon"></i>
                <i tabIndex="1" className="fab fa-facebook-messenger nav-icon"></i>
                <i tabIndex="1" className="fas fa-bell nav-icon"></i>
            </div>

            <div className="nav-icons flex">
                <i tabIndex="1" className="fas fa-question-circle nav-icon"></i>
                <i tabIndex="1" className="fas fa-caret-down nav-icon"></i>
            </div>

            <button className="header-btn" onClick={ logout }>Logout</button>

          </div>

        </div>
      </nav>
    </header>
  )
  return currentUser ? loggedIn() : loggedOut();

}

        // <SearchContainer />

export default Header;

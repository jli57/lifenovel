import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import FooterContainer from './footer/footer_container';
import HomePageContainer from './main/home_page_container';
import ProfileContainer from './profile/profile_container';
import HeaderContainer from './header/header_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import PageNotFound from './main/page_not_found';


const App = () => (
  <div id="app">
    <Route path="/" component={ HeaderContainer } />
    <main>
      <Modal />
      <div className="main-content">
        <Switch>
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <ProtectedRoute exact path="/:userId" component={ProfileContainer} />
          <Route exact path="/" component={HomePageContainer} />
          <Route component={ PageNotFound } />
        </Switch>
      </div>
    </main>
    <Route path="/" component={ FooterContainer } />
  </div>
)

export default App;

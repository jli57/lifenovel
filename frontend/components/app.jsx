import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import FooterContainer from './footer/footer_container';
import HomePageContainer from './main/home_page_container';
import ProfileContainer from './profile/profile_container';
import HeaderContainer from './header/header_container';
import PostIndexContainer from './posts/post_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
  <div id="app">
    <Route path="/" component={ HeaderContainer } />
    <main>
      <Modal />
      <div className="main-content">
        <Switch>
          <Route exact path="/signup" component={SignupFormContainer} />
          <Route exact path="/login" render={() => <LoginFormContainer header={false} />} />
          <Route exact path="/:userId" component={ProfileContainer} />
          <Route exact path="/" component={HomePageContainer} />
        </Switch>
      </div>
    </main>
    <Route path="/" component={ FooterContainer } />
  </div>
)

export default App;

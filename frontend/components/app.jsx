import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Footer from './footer/footer';
import HomePageContainer from './main/home_page_container';
import HeaderContainer from './header/header_container';
import PostIndexContainer from './posts/post_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Route path="/" component={ HeaderContainer } />
    <main>
      <div className="main-content">
        <Switch>
          <Route exact path="/signup" component={SignupFormContainer} />
          <Route exact path="/login" component={LoginFormContainer} />
          <Route exact path="/feed" component={PostIndexContainer} />
          <Route exact path="/" component={HomePageContainer} />
        </Switch>
      </div>
    </main>
    <Route path="/" component={Footer} />
  </div>
)

export default App;

import React from 'react';

import Intro from './intro';
import SignupFormContainer from '../session/signup_form_container';
import PostIndexContainer from '../posts/post_index_container';
import CreatePostContainer from '../posts/create_post_container';
import ProfileContainer from '../profile/profile_container';

import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const HomePage = ({ currentUser }) => {
  const loggedOut = () => (
    <div id="homepage">
      <Intro />
      <SignupFormContainer />
    </div>
  );

  const loggedIn = () => (
    <div id="homepage">
      <ProtectedRoute exact path="/:userId" component={ProfileContainer} />
      <div className="flex-vert">
        <Switch>
          <ProtectedRoute exact path="/:userId" component={CreatePostContainer} />
          <ProtectedRoute exact path="/" component={CreatePostContainer} />
        </Switch>
        <PostIndexContainer />
      </div>
    </div>
  )

  return currentUser ? loggedIn() : loggedOut();
};

export default HomePage;

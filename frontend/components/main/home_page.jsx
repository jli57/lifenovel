import React from 'react';

import Intro from './intro';
import SignupFormContainer from '../session/signup_form_container';
import PostIndexContainer from '../posts/post_index_container';

import { AuthRoute, Protected } from '../../util/route_util';


const HomePage = ({ currentUser }) => {
  const loggedOut = () => (
    <div id="homepage">
      <Intro />
      <SignupFormContainer />
    </div>
  );

  const loggedIn = () => (
    <div id="homepage">
      <PostIndexContainer />
    </div>
  )

  return currentUser ? loggedIn() : loggedOut();
};

export default HomePage;

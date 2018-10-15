import React from 'react';

import Intro from './intro';
import SignupFormContainer from '../session/signup_form_container';
import FeedContainer from '../posts/feed_container';

const HomePage = ({ currentUser }) => {
  const loggedOut = () => (
    <div className="homepage">
      <Intro />
      <SignupFormContainer />
    </div>
  );

  const loggedIn = () => (
    <div className="user-homepage">
      <section>
        <FeedContainer />
      </section>
    </div>
  )

  return currentUser ? loggedIn() : loggedOut();
};

export default HomePage;

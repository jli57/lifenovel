import React from 'react';

import Intro from './intro';
import SignupFormContainer from '../session/signup_form_container';
import FeedContainer from '../posts/feed_container';

import { Link } from "react-router-dom"; 

const HomePage = ({ currentUser }) => {
  const loggedOut = () => (
    <div className="homepage">
      <Intro />
      <SignupFormContainer />
    </div>
  );

  const loggedIn = () => (
    <div className="user-homepage">
      <aside>
        <nav>
          <ul>
            <li><Link to="#">New Feed</Link></li>
            <li><Link to="#">Messenger</Link></li>
            <li><Link to="#">Watch</Link></li>
            <li><Link to="#">Marketplace</Link></li>
            <li><Link to="#">Groups</Link></li>
            <li><Link to="#">Events</Link></li>
            <li><Link to="#">Fundraisers</Link></li>
            <li><Link to="#">Friends Lists</Link></li>
          </ul>
        </nav>
      </aside>
      <section>
        <FeedContainer />
      </section>
    </div>
  )

  return currentUser ? loggedIn() : loggedOut();
};

export default HomePage;

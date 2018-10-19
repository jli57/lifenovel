import React from 'react';

import Intro from './intro';
import SignupFormContainer from '../session/signup_form_container';
import FeedContainer from '../posts/feed_container';
import menu_buttons from '../../../app/assets/images/menu_buttons.png'; 

import BirthdayContainer from './birthday_container'; 
import Advertisements from './advertisements'; 

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
            <li>
              <Link to="#" className="news-feed-link">
                <img src={ menu_buttons } />
                <span>New Feed</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="messenger-link">
                  <img src={ menu_buttons } />
                  <span>Messenger</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="watch-link">
                  <img src={ menu_buttons } />
                  <span>Watch</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="marketplace-link">
                  <img src={ menu_buttons } />
                  <span>Marketplace</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="pages-link">
                  <img src={ menu_buttons } />
                  <span>Pages</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="groups-link">
                  <img src={ menu_buttons } />
                  <span>Groups</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="events-link">
                  <img src={ menu_buttons } />
                  <span>Events</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="fundraisers-link">
                  <img src={ menu_buttons } />
                  <span>Fundraisers</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="friends-lists-link">
                  <img src={ menu_buttons } />
                  <span>Friends Lists</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="main-section">
        <FeedContainer />
      </section>
      <section className="side-section">
        {/* <div>Stories</div> */}
        <BirthdayContainer />
        {/* <div>Sponsored</div> */}
        <Advertisements />
        {/* <div>Footer</div> */}
      </section>
    </div>
  )

  return currentUser ? loggedIn() : loggedOut();
};

export default HomePage;

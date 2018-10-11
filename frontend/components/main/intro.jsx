import React from 'react';

import login_find from '../../../app/assets/images/login_find.png';
import login_photo from '../../../app/assets/images/login_photo.png';
import login_timeline from '../../../app/assets/images/login_timeline.png';

const Intro = () => (
  <div className="intro">

    <ul>
      <li>
        <a href="https://www.linkedin.com/in/jingnali/" target="_blank">
          <i className="fab fa-linkedin fa-3x"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/jli57" target="_blank">
          <i className="fab fa-github-square fa-3x"></i>
        </a>
      </li>
      <li>
      </li>
    </ul>

    <h1>Connect with friends and the world around you on Lifenovel.</h1>

    <div>
      <img src={login_photo} />
      <p>
        <span>See photos and updates </span>
        <span>from friends in News Feed.</span>
      </p>
    </div>
    <div>
      <img src={login_timeline} />
      <p>
        <span>Share what's new </span>
        <span>in your life on your Timeline.</span>
      </p>
    </div>
    <div>
      <img src={login_find} />
      <p>
        <span>Find more </span>
        <span>more of what you are looking for with Lifenovel Search.</span>
      </p>
    </div>

  </div>
);

export default Intro;

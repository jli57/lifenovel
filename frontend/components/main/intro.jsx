import React from 'react';

import login_find from '../../../app/assets/images/login_find.png';
import login_photo from '../../../app/assets/images/login_photo.png';
import login_timeline from '../../../app/assets/images/login_timeline.png';

const Intro = () => (
  <div id="intro">
    <h1 className="h1">Connect with friends and the world around you on Litenovel.</h1>
    <div>
      <img src={login_photo} />
      <p>
        <span className="bold">See photos and updates </span>
        <span>from friends in News Feed.</span>
      </p>
    </div>
    <div>
      <img src={login_timeline} />
      <p>
        <span className="bold">Share what's new </span>
        <span>in your life on your Timeline.</span>
      </p>
    </div>
    <div>
      <img src={login_find} />
      <p>
        <span className="bold">Find more </span>
        <span>more of what you are looking for with Litenovel Search.</span>
      </p>
    </div>
  </div>
);

export default Intro;

import React from 'react';

import Intro from './intro';
import SignupFormContainer from '../session/signup_form_container';

import { AuthRoute, Protected } from '../../util/route_util';


const HomePage = ({ currentUser }) => (
  <div id="homepage">
    <Intro />
    <SignupFormContainer />
  </div>
);

export default HomePage;

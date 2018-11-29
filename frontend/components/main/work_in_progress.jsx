import React from 'react';
import wip_pusheen from '../../../app/assets/images/wip.gif';
import { Link } from 'react-router-dom';

const WorkInProgress = () => (
  <div className="error-page">
    <h1>Pusheen is working hard on this page.</h1>
    <h2>Check back at a later time.</h2>
    <img src={ wip_pusheen }/>
    <span>
      Go back to the <Link to="/">Home Page</Link>
    </span>
  </div>
);

export default WorkInProgress;

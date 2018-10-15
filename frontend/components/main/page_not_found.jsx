import React from 'react';
import lost_pusheen from '../../../app/assets/images/error.png';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className="error-page">
    <h1>This page isn't available.</h1>
    <h2>Whoops! It appears that you are lost.</h2>
    <img src={ lost_pusheen }/>
    <span>
      Go back to the <Link to="/">previous page</Link> · Go to <Link to="/">News Feed</Link> · Visit our <Link to="/">Help Center</Link>
    </span>
  </div>
);

export default PageNotFound;

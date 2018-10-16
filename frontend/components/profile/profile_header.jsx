import React from 'react';
import { Link } from 'react-router-dom';
import FriendsMenuContainer from './friends_menu_container';

const ProfileHeader = ({currentUser, profileUser}) => {
  return (
    <div className="profile-header">
      <div className="cover-photo">
        <div className="profile-info">
          <h1>{ `${profileUser.first_name} ${profileUser.last_name}` }</h1>
        </div>
        <FriendsMenuContainer />
      </div>
      <nav className="profile-nav">
        <ul>
          <li>
            <Link to="#">Timeline</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Friends</Link>
          </li>
          <li>
            <Link to="#">Photos</Link>
          </li>
          <li>
            <Link to="#">More</Link>
          </li>
        </ul>
      </nav>
      <div className="profile-photo">
        <img src={ profileUser.profile_photo } />
      </div>
    </div>
  );
};

export default ProfileHeader;

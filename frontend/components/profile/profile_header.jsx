import React from 'react';
import { Link } from 'react-router-dom';
import FriendsMenuContainer from './friends_menu_container';

const ProfileHeader = ({profileUser, currentUser, openModal }) => {

  if ( profileUser === undefined || currentUser === undefined ) return null;

  const editProfilePhoto = () => {
    return currentUser.id === profileUser.id ? (
      <div className="edit-profile-photo">
        <i className="fas fa-camera"></i>
        <span>Update Profile Picture</span>
      </div>
    ) : null
  }

  const handleClick = (e) => {
    if ( currentUser.id === profileUser.id ) {
      openModal("editProfilePhoto", {userId: currentUser.id, mode: "absolute" })
    }
  }

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
            <Link to="/wip">Timeline</Link>
          </li>
          <li>
            <Link to="/wip">About</Link>
          </li>
          <li>
            <Link to="/wip">Friends</Link>
          </li>
          <li>
            <Link to="/wip">Photos</Link>
          </li>
          <li>
            <Link to="/wip">More</Link>
          </li>
        </ul>
      </nav>
      <div className="profile-photo" onClick={ () => { handleClick() }}>
        <img src={ profileUser.profile_photo } className="profile-img"/>
        { editProfilePhoto() }
      </div>
    </div>
  );
};

export default ProfileHeader;

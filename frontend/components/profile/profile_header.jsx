import React from 'react';
import { Link } from 'react-router-dom';

const ProfileHeader = ({currentUser, profileUser, relType }) => {
  console.log( currentUser.id, profileUser.id, relType ); 
  const addFriend = (
    <div className="add-friend">
      <button>
        <i className="fas fa-user"></i>
        <i className="fas fa-plus"></i>
        <span>Add Friend</span>
      </button>
    </div>
  );

  const RemoveFriend = (
    <div className="add-friend">
      <button>
        <i className="fas fa-user"></i>
        <i className="fas fa-plus"></i>
        <span>Remove Friend</span>
      </button>
    </div>
  );

  return (
    <div className="profile-header">
      <div className="cover-photo">
        <div className="profile-info">
          <h1>{ `${profileUser.first_name} ${profileUser.last_name}` }</h1>
        </div>
        <div className="profile-actions">
          { relType === "none" ? addFriend : null }
        </div>
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

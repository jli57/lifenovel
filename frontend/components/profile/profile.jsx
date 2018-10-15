import React from 'react';
import FriendIndexContainer from '../friends/friend_index_container';
import PostIndexContainer from '../posts/post_index_container';
import { ProtectedRoute } from '../../util/route_util';

const Profile  = ({currentUser, profileUser}) => {

  const handleFile = (file) =>  {

  }

  return (
    <div className="profile">
      <div className="profile-info">
        <h1>{ `${currentUser.first_name} ${currentUser.last_name}` }</h1>
        <img className="profile-photo" src={ currentUser.profile_photo } />
        <span>Hi, my name is { currentUser.first_name }</span>
      </div>
      <FriendIndexContainer profileUser={profileUser}/>
      <PostIndexContainer />
    </div>
  );
};

export default Profile;

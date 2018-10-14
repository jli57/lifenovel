import React from 'react';

const Profile  = ({currentUser}) => {

  const handleFile = (file) =>  {

  }

  return (
    <div className="profile">
      <h1>{ `${currentUser.first_name} ${currentUser.last_name}` }</h1>
      <img className="profile-photo" src={ currentUser.profile_photo } />
      <span>Hi, my name is { currentUser.first_name }</span>
    </div>
  );
};

export default Profile;

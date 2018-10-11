import React from 'react';

const Profile  = ({currentUser}) => {

  const handleFile = (file) =>  {

  }


  return (
    <div>
      <h1>{ `${currentUser.first_name} ${currentUser.last_name}` }</h1>

      This is a profile for { currentUser.first_name }
      <img className="profile-photo" src={ currentUser.profile_photo } />
    </div>
  );
};

export default Profile;

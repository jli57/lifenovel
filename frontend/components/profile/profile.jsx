import React from 'react';

const Profile  = ({currentUser}) => (
  <div>
    <h1>{ `${currentUser.first_name} ${currentUser.last_name}` }</h1>
    
    This is a profile for { currentUser.first_name }
  </div>
);

export default Profile;

import React from 'react'; 
import { Link } from 'react-router-dom'; 

const UserItem = ({user}) => {
  const fullName = `${user.first_name} ${user.last_name}`; 
  return ( 
    <li className="user-item"> 
      <Link to={ `/${user.id}` }> 
        <img className="profile-icon" src={user.profile_photo} />
        <span className="full-name">{ fullName }</span>
      </Link>
    </li>
  ); 
};

export default UserItem; 
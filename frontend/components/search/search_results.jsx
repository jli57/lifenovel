import React from 'react'; 
import { Link } from 'react-router-dom'; 
import UserItem from './user_item'; 

const SearchResults = ({ users, closeModal }) => {
  if ( users.length === 0 ) return null;
  return (
    <div className="search-results" onClick={ () =>{ closeModal() }}>
      <ul>
        { users.map( user => <UserItem key={user.id} user={user} />) }
      </ul>
      <div> 
        <Link to="#">See All</Link>
      </div> 
    </div>
  );
};

export default SearchResults; 
import React from 'react';
import { Link } from 'react-router-dom';
import UserItem from './user_item';
import EmptyList from '../notifications/empty_list';

const SearchResults = ({ users, closeModal }) => {
  return (
    <div className="search-results" onClick={ () =>{ closeModal() }}>
      { users.length === 0 ? ( <EmptyList /> ) : (
      <ul>
        { users.map( user => <UserItem key={user.id} user={user} />) }
      </ul> )}
      <div>
        <Link to="/wip">See All</Link>
      </div>
    </div>
  );
};

export default SearchResults;
import React from 'react'; 
import moment from 'moment'; 
import { Link } from 'react-router-dom'; 

const Birthday = ({friends}) => {
  if ( friends.length === 0 ) return null; 

  console.log(friends); 
  return (
    <div className="birthdays homepage-side-section"> 
      <h1>Birthdays</h1>
      <ul>
        { friends.map( friend => (
          <li key={friend.id}>
            <i className="fas fa-birthday-cake"></i>
            <span>
              <Link className="user-link" to={ `/${friend.id}` }>{ `${friend.first_name} ${friend.last_name}` }</Link>
              : {`${moment(friend.birth_date).format("MMM D")}`} 
            </span>
          </li>
        )) }
      </ul>
    </div>
  ); 
}; 

export default Birthday; 
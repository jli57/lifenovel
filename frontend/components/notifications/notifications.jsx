import React from 'react'; 
import { Link } from 'react-router-dom'; 
import moment from 'moment'; 

const Notifications = ({ notifications, users, notificationType, message }) => {
  if ( notifications.length === 0 ) return null; 
  return (
    <div className="notifications">
      <h1>{notificationType}</h1>
      <ul>
        { notifications.map( event => {
          const user = users[event.user1_id]; 
            if ( user ) {
              return (
                <li key={event.id} >
                  <Link to={ `/${event.user1_id}`} className="notification-link">
                    <div className="notification-message">
                      <img src={ users[event.user1_id].profile_photo} />
                      <div>
                        <span className="name">{`${user.first_name} ${user.last_name}`}</span>
                        <span>{ message }</span>
                      </div>
                    </div>
                    <div>{ moment(event.created_at).fromNow() }</div>
                  </Link>
                </li> 
              ); 
            }
          }) }
      </ul>
      <div> 
        <Link to="#">See All</Link>
      </div> 
    </div>
  );
};

export default Notifications; 
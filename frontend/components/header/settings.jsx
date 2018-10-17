import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Settings = ({ logout }) => {
  if ( notifications.length === 0 ) return null; 
  return (
    <div className="settings">
      <h1>Notifications</h1>
      <ul>
        <li><Link to="#">Manage Groups</Link></li>
        <li><Link to="#">Advertising on Lifenovel</Link></li>
        <li><Link to="#">Activity Log</Link></li>
        <li><Link to="#">News Feed Preferences</Link></li>
        <li><Link to="#">Settings</Link></li>
        <li><Link to="#">Send Money</Link></li>
        <li><Link to="#">Paymount History</Link></li>
        <li><Link to="#">Logout</Link></li>
      </ul>
      <div> 
        <Link to="#">See All</Link>
      </div> 
    </div>
  );
};

export default Settings; 
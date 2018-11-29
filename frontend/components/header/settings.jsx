import React from 'react';
import { Link } from 'react-router-dom';

const Settings = ({ logout }) => {
  if ( notifications.length === 0 ) return null;
  return (
    <div className="settings">
      <h1>Notifications</h1>
      <ul>
        <li><Link to="/wip">Manage Groups</Link></li>
        <li><Link to="/wip">Advertising on Lifenovel</Link></li>
        <li><Link to="/wip">Activity Log</Link></li>
        <li><Link to="/wip">News Feed Preferences</Link></li>
        <li><Link to="/wip">Settings</Link></li>
        <li><Link to="/wip">Send Money</Link></li>
        <li><Link to="/wip">Paymount History</Link></li>
        <li><Link to="/wip">Logout</Link></li>
      </ul>
      <div>
        <Link to="/wip">See All</Link>
      </div>
    </div>
  );
};

export default Settings;
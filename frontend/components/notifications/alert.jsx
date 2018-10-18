import React from 'react'; 

const Alert = ({num, newNotifications}) => ( 
  newNotifications ? (
    <div className="alert">
      { num }
    </div>
  ) : null 
)

export default Alert; 
import React from 'react'; 

const Alert = ({num}) => ( 
  num ? (
    <div className="alert">
      { num }
    </div>
  ) : null 
)

export default Alert; 
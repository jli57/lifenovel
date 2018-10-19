import React from 'react'; 

const About = ({ user, currentUser }) => { 
  if ( !user ) return null; 

  return ( 
    <div className="about">
      <div className="about-label">Name</div>
      <div >{`${user.first_name} ${user.last_name}` }</div>
      <div className="about-label">Birthday</div>
      <div>{ user.birth_date }</div>
      <div className="about-label">Email/Phone</div>
      <div>{ user.email }</div>
      <div className="about-label">Gender</div>
      <div>{ user.gender === "F" ? "Female" : "Male" }</div>
    </div> 
  ); 
}; 

export default About; 
import React from 'react'; 

const Likes = ({likes}) => {
  const numLikes = likes.length 
  const pluralize = numLikes > 1 ? "s" : ""; 

  return numLikes ? (
    <div>
      { `${likes.length} like${pluralize}` } 
    </div>
  ) : null 
}; 

export default Likes; 
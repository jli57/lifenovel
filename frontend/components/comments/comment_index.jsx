import React from 'react';
import CommentItemContainer from './comment_item_container'; 

const CommentIndex = ({ comments, total }) => {

  const prevComments =  comments.length <= total || total === 0 ? null : (
    <div className="prev-comments">
      <div>View Previous Comments</div>
      <div>{ comments.length } of { total }</div>
    </div>
  );

  return (

    <div className="comment-index">
      { prevComments }
      <ul>
        { comments.map( comment => (
          <CommentItemContainer key={ comment.id } comment={ comment } />
        )) }
      </ul>
    </div>
  );
};

export default CommentIndex;

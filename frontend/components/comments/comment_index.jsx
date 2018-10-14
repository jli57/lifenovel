import React from 'react';
import CommentIndexItem from './comment_index_item';

const CommentIndex = ({ comments, total }) => {

  const prevComments =  comments.length === 0 ? null : (
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
          <CommentIndexItem
            key={ comment.id }
            comment={ comment }
        />)) }
    </ul>
  </div>
);
};

export default CommentIndex;

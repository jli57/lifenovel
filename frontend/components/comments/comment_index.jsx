import React from 'react';
import CommentIndexItem from './comment_index_item';

const CommentIndex = ({ comments, total, postId, parentId, level, openModal }) => {

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
          <CommentIndexItem key={ comment.id } comment={ comment } level={ level } 
            openModal={ openModal } />
        )) }
      </ul>
    </div>
  );
};

export default CommentIndex;

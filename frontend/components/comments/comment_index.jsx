import React from 'react';
import CommentIndexItem from './comment_index_item';
import CommentIndexContainer from './comment_index_container'; 

const CommentIndex = ({ comments, total, postId, parentId, level }) => {

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
          <div key={ comment.id }>
            <CommentIndexItem comment={ comment } level={ level } />
          </div>
        )) }
      </ul>
    </div>
  );
};

export default CommentIndex;

import React from 'react';
import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment, fetchComment } from '../../actions/comment_actions';

const CreateCommentContainer = ({ comment, currentUser, submitAction, fetchComment }) => {
  return (
    <div className="create-comment">
      <div>
        <img className="comment-profile-icon" src={currentUser.profile_photo} />
      </div>
      <div>
        <CommentForm comment={comment} submitAction={submitAction} fetchComment={fetchComment} />
      </div>
    </div>
  );
}; 

const mapStateToProps = ( { session, entities: { users } }, ownProps ) => {
  const { postId, parentId } = ownProps; 
  return {
    comment: {  author_id: session.id,
      body: "",
      post_id: postId ,
      parent_id: parentId  },
    currentUser: users[session.id],
    formType: "create"
  };
}

const mapDispatchToProps = dispatch => ({
  submitAction: (comment) => dispatch(createComment(comment)), 
  fetchComment: (commentId) => dispatch(fetchComment(commentId)), 
});

export default connect( mapStateToProps, mapDispatchToProps )( CreateCommentContainer );

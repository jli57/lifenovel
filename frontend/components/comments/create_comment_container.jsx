import React from 'react';
import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';

const CreateCommentContainer = ({ comment, currentUser, submitAction }) => {
  return (
    <div className="create-comment">
      <div>
        <img className="comment-profile-icon" src={currentUser.profile_photo} />
      </div>
      <div>
        <CommentForm
          comment={comment}
          submitAction={submitAction}
          />
      </div>
    </div>
  );
};


const mapStateToProps = ( { session, entities: { users } }, ownProps ) => {
  return {
    comment: {  author_id: session.id,
      body: "",
      post_id: ownProps.postId,
      parent_id: null },
    currentUser: users[session.id],
    formType: "create"
  };
}

const mapDispatchToProps = dispatch => ({
  submitAction: (comment) => dispatch(createComment(comment))
});

export default connect( mapStateToProps, mapDispatchToProps )( CreateCommentContainer );

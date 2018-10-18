import React from 'react';
import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { updateComment, fetchComment } from '../../actions/comment_actions';
import { closeModal } from '../../actions/modal_actions'; 

class EditCommentContainer extends React.Component {

  render() {
    return (
      <div className="edit-comment">
        <CommentForm
          comment={ this.props.comment}
          currentUser={ this.props.currentUser}
          submitAction={ this.props.submitAction }
          fetchComment={ this.props.fetchComment }
          toggleForm={ this.props.toggleForm }
          formType={ this.props.formType } />
      </div>
    );
  }
}


const mapStateToProps = ( { session, entities: { users, comments }, ui: { modal } }, ownProps ) => {
  return {
    comment: comments[ownProps.commentId],
    modal,
    currentUser: users[session.id],
    formType: "Edit",
    toggleForm: ownProps.toggleForm, 
  };
}

const mapDispatchToProps = dispatch => ({
  submitAction: (comment) => dispatch( updateComment(comment) ), 
  fetchComment: (commentId) => dispatch(fetchComment(commentId)), 
  closeModal: () => dispatch( closeModal ), 
});

export default connect( mapStateToProps, mapDispatchToProps )( EditCommentContainer );

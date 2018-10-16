import React from 'react';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { updatePost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

class EditPostContainer extends React.Component {

  render() {
    return (
      <div className="edit-post">
        <nav>
            <div><h1>Edit Post</h1></div>
            <div onClick={ this.props.closeModal }><span><i className="fas fa-times"></i></span></div>
        </nav>
        <PostForm
          post={ this.props.post}
          currentUser={ this.props.currentUser}
          submitAction={ this.props.submitAction } />
      </div>
    );
  }
}


const mapStateToProps = ( { session, entities: { users, posts }, ui: { modal, modalArgs } }, ownProps ) => {
  return {
    post: posts[modalArgs.postId],
    modal,
    currentUser: users[session.id],
    formType: "edit",
  };
}

const mapDispatchToProps = dispatch => ({
  submitAction: (post) => dispatch(updatePost(post)),
  closeModal: () => dispatch( closeModal() ),
});

export default connect( mapStateToProps, mapDispatchToProps )( EditPostContainer );

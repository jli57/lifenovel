import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

const CreatePostContainer = ({ post, currentUser, submitAction, profileUser }) => {

  const placeholderText = (
    ( currentUser.id === profileUser.id ) ?
      `What's on your mind, ${currentUser.first_name}` :
      `Write something to ${profileUser.first_name}...`
  );

  return (
    <div className="create-post">
      <nav>
        <ul>
          <li>
            <div>
              <i className="fas fa-pencil-alt"></i><span>Make Post</span>
            </div>
          </li>
          <li>
            <div>
              <i className="fas fa-camera"></i><span>Photos</span>
            </div>
          </li>
        </ul>
      </nav>
      <PostForm
        post={post}
        currentUser={currentUser}
        submitAction={submitAction}
        placeholderText={ placeholderText }
        pageId={ profileUser.id }
       />
    </div>
  );
};


const mapStateToProps = ( { session, entities: { users } }, ownProps ) => {
  const pageId = ownProps.location.pathname === "/" ? session.id : parseInt(ownProps.match.params.userId);
  return {
    post: {  author_id: session.id, body: "" },
    currentUser: users[session.id],
    profileUser: users[pageId],
    formType: "create",
  };
}

const mapDispatchToProps = dispatch => ({
  submitAction: (post) => dispatch(createPost(post))
});

export default connect( mapStateToProps, mapDispatchToProps )( CreatePostContainer );

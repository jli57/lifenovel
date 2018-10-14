import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

const CreatePostContainer = ({ post, currentUser, submitAction }) => {
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
       />
    </div>
  );
};


const mapStateToProps = ( { session, entities: { users } }, ownProps ) => {
  const page_id = ownProps.location.pathname === "/" ? session.id : ownProps.match.params.userId
  return {
    post: {  author_id: session.id, body: "", page_id },
    currentUser: users[session.id],
    formType: "create"
  };
}

const mapDispatchToProps = dispatch => ({
  submitAction: (post) => dispatch(createPost(post))
});

export default connect( mapStateToProps, mapDispatchToProps )( CreatePostContainer );

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { login } from '../../actions/session_actions';
import PostForm from './post_form';
import { createPost, fetchPosts } from '../../actions/post_actions';

const CreatePostContainer = ({ post, currentUser, submitAction, fetchPosts }) => {
  return (
    <div className="create-post">
      <nav>
        <ul>
          <li>
            <i className="fas fa-pencil-alt"></i><span> Make Post</span>
          </li>
          <li>
            <i className="far fa-images"></i><span> Photos </span>
          </li>
        </ul>
      </nav>
      <PostForm
        post={post}
        currentUser={currentUser}
        submitAction={submitAction}
        fetchPosts={fetchPosts} />
    </div>
  );
};


const mapStateToProps = ( { session, entities: { users } }, ownProps ) => {
  const page_id = ownProps.location.pathname === "/" ? session.id : ownProps.match.params.userId
  return {
    post: {  author_id: session.id, body: "", page_id },
    currentUser: users[session.id]
  };
}

const mapDispatchToProps = dispatch => ({
  submitAction: (post) => dispatch(createPost(post)),
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect( mapStateToProps, mapDispatchToProps )( CreatePostContainer );

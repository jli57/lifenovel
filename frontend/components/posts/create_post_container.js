import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { login } from '../../actions/session_actions';
import CreatePostForm from './create_post_form';
import { createPost, fetchPosts } from '../../actions/post_actions';

const mapStateToProps = ( { session, entities: { users } }, ownProps ) => {
  const page_id = ownProps.location.pathname === "/" ? session.id : ownProps.match.params.userId
  return {
    post: {  author_id: session.id, body: "", page_id },
    currentUser: users[session.id]
  };

}

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post)),
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect( mapStateToProps, mapDispatchToProps )( CreatePostForm );

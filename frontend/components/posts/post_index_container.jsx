import React from 'react';
import { connect } from 'react-redux';
import { updatePost, deletePost, fetchPosts } from '../../actions/post_actions';
import PostIndex from './post_index';
import { filterPagePosts, addAuthorToPosts } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';

class PostIndexContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <PostIndex
        posts={ this.props.posts }
        updatePost={ this.props.updatePost }
        deletePost={ this.props.deletePost }
        currentUser={ this.props.currentUser }
        openModal={ this.props.openModal }
      />
    )
  }
}

const mapStateToProps = ({ entities: { users, posts }, session }) => ({
  posts: filterPagePosts(session, posts),
  currentUser: session.id
});

const mapDispatchToProps = dispatch => ({
  updatePost: (post) => dispatch( updatePost(post) ),
  deletePost: (postId) => dispatch( deletePost(postId) ),
  fetchPosts: () => dispatch( fetchPosts() ),
  openModal: (modal, postId) => dispatch( openModal(modal, postId) ),
});

export default connect( mapStateToProps, mapDispatchToProps )(PostIndexContainer);

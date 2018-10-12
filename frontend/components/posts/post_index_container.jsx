import React from 'react';
import { connect } from 'react-redux';
import { updatePost, deletePost, fetchPosts } from '../../actions/post_actions';
import PostIndex from './post_index';
import { filterPagePosts, addAuthorToPosts } from '../../reducers/selectors';

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
      />
    )
  }
}

const mapStateToProps = ({ entities: { users, posts }, session }) => ({
  posts: filterPagePosts(session, posts),
});

const mapDispatchToProps = dispatch => ({
  updatePost: (post) => dispatch( updatePost(post) ),
  deletePost: (postId) => dispatch( deletePost(postId) ),
  fetchPosts: () => dispatch( fetchPosts() ),
});

export default connect( mapStateToProps, mapDispatchToProps )(PostIndexContainer);

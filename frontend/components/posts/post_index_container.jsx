import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { filterPagePosts, addAuthorToPosts } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';
import PostIndex from './post_index'; 

class PostIndexContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <PostIndex
        posts={ this.props.posts }
        currentUser={ this.props.currentUser }
        openModal={ this.props.openModal }
      />
    );
  }
}

const mapStateToProps = ({ entities: { users, posts }, session }) => ({
  posts: filterPagePosts(session, posts),
  currentUser: session.id
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch( fetchPosts() ),
  openModal: (modal, postId) => dispatch( openModal(modal, postId) ),
});

export default connect( mapStateToProps, mapDispatchToProps )(PostIndexContainer);

import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { filterPagePosts, addAuthorToPosts } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';
import PostIndex from './post_index';

class PostIndexContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      hasMore: true,
      isLoading: false
    };

    window.onscroll = () => {
      const {
        props: {
          fetchPosts,
          posts,
        },
        state: {
          error,
          hasMore,
          isLoading,
        },
      } = this;

      // console.log("inner height", window.innerHeight);
      // console.log("scroll Top", document.documentElement.scrollTop);
      // console.log("total", window.innerHeight + document.documentElement.scrollTop);
      // console.log("off set", document.documentElement.offsetHeight );
      if ( error || isLoading || !hasMore ) return;

      if (
        window.innerHeight + document.documentElement.scrollTop
          >= document.documentElement.offsetHeight
      ) {
        fetchPosts( posts.length, 5);
      }
    };
  }

  componentDidMount() {
    this.props.fetchPosts(0, 5);

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
  fetchPosts: (offset, limit) => dispatch( fetchPosts(offset, limit) ),
  openModal: (modal, postId) => dispatch( openModal(modal, postId) ),
});

export default connect( mapStateToProps, mapDispatchToProps )(PostIndexContainer);

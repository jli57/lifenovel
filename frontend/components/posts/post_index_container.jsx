import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { filterPosts } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';
import PostIndex from './post_index';


const mapStateToProps = ({ entities: { users, posts }, session }, ownProps) => {
  const userId = parseInt(ownProps.match.params.userId);
  return {
    posts: filterPosts( posts, userId),
    currentUser: users[session.id],
    user_ids: [userId],
  }
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: (options) => dispatch( fetchPosts(options) ),
  openModal: (modal, postId) => dispatch( openModal(modal, postId) ),
});

export default connect( mapStateToProps, mapDispatchToProps )( PostIndex );

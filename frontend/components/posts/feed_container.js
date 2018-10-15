import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { filterFeedPosts, filterRelationships } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';
import PostIndex from './post_index';


const mapStateToProps = ({ entities: { users, userRelationships, posts }, session }) => {
  const friendIds = filterRelationships(session.id, userRelationships, "accepted").concat(session.id);
  return {
    posts: filterFeedPosts(posts, friendIds),
    currentUser: users[session.id],
    user_ids: friendIds
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: (options) => dispatch( fetchPosts(options) ),
  openModal: (modal, postId) => dispatch( openModal(modal, postId) ),
});

export default connect( mapStateToProps, mapDispatchToProps )( PostIndex );

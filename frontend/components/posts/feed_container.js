import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { filterPagePosts } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';
import PostIndex from './post_index';


const mapStateToProps = ({ entities: { users, posts }, session }) => ({
  posts: filterPagePosts(session, posts),
  currentUser: session.id
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: (offset, limit) => dispatch( fetchPosts(offset, limit) ),
  openModal: (modal, postId) => dispatch( openModal(modal, postId) ),
});

export default connect( mapStateToProps, mapDispatchToProps )( PostIndex );

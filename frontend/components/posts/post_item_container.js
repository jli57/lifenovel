import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import PostIndexItem from './post_index_item';


const mapStateToProps = ({ entities: { users }, session }, { post }) => {
  return {
    post,
    postAuthor: users[post.author_id],
    currentUser: session.id,
  }
};

const mapDispatchToProps = dispatch => ({
  openModal: (modal, postId) => dispatch( openModal(modal, postId) ),
  fetchUsers: (userIds) => dispatch( fetchUsers(userIds) ),
});

export default connect( mapStateToProps, mapDispatchToProps )( PostIndexItem );

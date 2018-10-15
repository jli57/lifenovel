import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { filterFriends, filterRelationships } from '../../reducers/selectors';
// import { openModal } from '../../actions/modal_actions';
import FriendIndex from './friend_index';


const mapStateToProps = ({ entities: { users, userRelationships }, session }) => {
  const friendIds = filterRelationships(session.id, userRelationships, "accepted");
  return {
    friendIds,
    friends: filterFriends(session.id, users, friendIds),
    currentUser: session.id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: (friendIds) => dispatch( fetchUsers(friendIds) ),
  // openModal: (modal, postId) => dispatch( openModal(modal, postId) ),
});

export default connect( mapStateToProps, mapDispatchToProps )( FriendIndex );

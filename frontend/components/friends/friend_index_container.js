import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { filterFriends, filterRelationships } from '../../reducers/selectors';
// import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import FriendIndex from './friend_index';


const mapStateToProps = ({ entities: { users, userRelationships }, session }, ownProps) => {
  const userId = parseInt(ownProps.match.params.userId);
  const friendIds = filterRelationships( userId, userRelationships, "accepted");
  return {
    friendIds,
    friends: filterFriends(userId, users, friendIds),
    currentUser: users[session.Id]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: (friendIds) => dispatch( fetchUsers(friendIds) ),
  // openModal: (modal, postId) => dispatch( openModal(modal, postId) ),
});

export default connect( mapStateToProps, mapDispatchToProps )( FriendIndex );

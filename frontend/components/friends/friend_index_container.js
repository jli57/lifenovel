import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { filterFriends, filterRelationships } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';
import FriendIndex from './friend_index';


const mapStateToProps = ({ entities: { users, userRelationships }, session }, ownProps) => {
  const userId = Number(ownProps.match.params.userId) || 0;
  const friendIds = filterRelationships( userId, userRelationships, "accepted");
  return {
    friendIds,
    friends: filterFriends(users, friendIds),
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: (friendIds) => dispatch( fetchUsers(friendIds) ),
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( FriendIndex ));

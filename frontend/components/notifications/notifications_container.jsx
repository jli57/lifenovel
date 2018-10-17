import React from 'react'; 
import { connect } from 'react-redux';
import { filterUsers, getPendingFriendRequests } from '../../reducers/selectors'; 
import { fetchUsers } from '../../actions/user_actions'; 
import Notifications from './notifications';

class NotificationsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers(this.props.notifications.map(rel => rel.user1_id)); 
  }
  componentWillReceiveProps(nextProps) {
    let missingUsers = []; 
    nextProps.notifications.forEach( rq => {
      if ( nextProps.users[rq.user1_id] === undefined ) {
        missingUsers.push(rq.user1_id); 
      }
    })
    if ( missingUsers.length > 0 ) {
      this.props.fetchUsers(missingUsers);     
    }
  }
  render() {
    return (
      <Notifications
        users={ this.props.users }
        notifications={ this.props.notifications }
      />
    )
  }
}

const mapStateToProps = ({ entities: { users, userRelationships }, session }) => {
  const notifications = getPendingFriendRequests( session.id, userRelationships ); 
  return {
    currentUser: users[session.id],
    notifications, 
    users,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: (userIds) => dispatch( fetchUsers(userIds) ), 
});

export default connect( mapStateToProps, mapDispatchToProps)( NotificationsContainer );

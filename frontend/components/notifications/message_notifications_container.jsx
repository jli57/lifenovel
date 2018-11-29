import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import Notifications from './notifications';

class MessageNotificationsContainer extends React.Component {

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <Notifications
        users={ this.props.users }
        notifications={ this.props.notifications }
        notificationType={ this.props.notificationType }
        message={ this.props.message }
      />
    )
  }
}

const mapStateToProps = ({ entities: { users, userRelationships }, session }) => {
  const notifications = [];
  return {
    currentUser: users[session.id],
    notifications,
    users,
    message: " has a new chat message",
    notificationType: "Messages",
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: (userIds) => dispatch( fetchUsers(userIds) ),
});

export default connect( mapStateToProps, mapDispatchToProps)( MessageNotificationsContainer );

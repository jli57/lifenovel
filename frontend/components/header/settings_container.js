import React from 'react'; 
import { connect } from 'react-redux';
import Settings from './settings';
import { logout } from '../../actions/session_actions'; 

const mapStateToProps = ({ entities: { users, userRelationships }, session }) => {
  const notifications = getPendingFriendRequests( session.id, userRelationships ); 
  return {
    currentUser: users[session.id],
    notifications, 
    users,
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch( logout() ), 
});

export default connect( mapStateToProps, mapDispatchToProps)( Settings );

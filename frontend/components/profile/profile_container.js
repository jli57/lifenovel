import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUsers } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  const profileId = Number(ownProps.match.params.userId) || 0;
  return {
    // currentUser: users[session.id],
    profileUser: users[profileId],
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: (userIds) => dispatch( fetchUsers(userIds) )
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(Profile));

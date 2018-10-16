import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ session, entities: { users, userRelationships } }, ownProps) => {
  const profileId = Number(ownProps.match.params.userId) || 0;
  return {
    currentUser: users[session.id],
    profileUser: users[profileId],
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: (userIds) => dispatch( fetchUsers(userIds) ),
  fetchPosts: (options) => dispatch( fetchPosts(options) ),
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(Profile));

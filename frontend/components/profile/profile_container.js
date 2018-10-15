import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import { getRelType } from '../../reducers/selectors';


const mapStateToProps = ({ session, entities: { users, userRelationships } }, ownProps) => {
  const profileId = parseInt(ownProps.match.params.userId);
  return {
    currentUser: users[session.id],
    profileUser: users[profileId],
    relType: getRelType( session.id, profileId, userRelationships )
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: (userIds) => dispatch( fetchUsers(userIds) ),
  fetchPosts: (options) => dispatch( fetchPosts(options) ),
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(Profile));

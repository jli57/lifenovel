import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ session, entities: { users } }, ownProps) => {

  return {
    currentUser: users[session.id],
    profileUser: users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: (userIds) => dispatch( fetchUsers(userIds) ),
  fetchPosts: (options) => dispatch( fetchPosts(options) ),
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(Profile));

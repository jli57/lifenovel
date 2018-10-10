import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import HomePage from './home_page';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  return {
    currentUser: users[session.id],
    userId: ownProps.match.params.userId
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

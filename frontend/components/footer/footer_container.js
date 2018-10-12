import { connect } from 'react-redux';
import { removeSessionErrors } from '../../actions/session_actions';

import Footer from './footer';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  removeSessionErrors: () => dispatch(removeSessionErrors()), 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'; 
import Header from './header';

const mapStateToProps = ({ session, entities: { users }}, ownProps ) => ({
  currentUser: users[session.id],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal, modalArgs) => dispatch(openModal(modal, modalArgs)), 
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));

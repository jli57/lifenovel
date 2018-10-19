import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login } from '../../actions/session_actions';
import { receiveLogin } from '../../actions/login_actions'; 
import LoginForm from './login_form';

const mapStateToProps = ({ errors, session }, ownProps) => ({
  user: { email: "", password: ""},
  header: ownProps.header ? true : false,
  sessionErrors: errors.session,
  currentUser: session.id
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)), 
  receiveLogin: (login) => dispatch(receiveLogin(login)), 
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( LoginForm ));

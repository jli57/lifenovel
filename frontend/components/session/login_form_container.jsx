import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login, removeSessionErrors } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors, session }, ownProps) => ({
  user: { email: "", password: ""},
  header: ownProps.header,
  sessionErrors: errors.session,
  currentUser: session.id
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  removeSessionErrors: () => dispatch( removeSessionErrors() ),
  fetchPosts: () => dispatch( fetchPosts() )
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( LoginForm ));

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors: { session } }, ownProps) => ({
  user: { email: "", password: ""},
  header: ownProps.header,
  sessionErrors: session
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  fetchPosts: () => dispatch( fetchPosts() )
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( LoginForm ));

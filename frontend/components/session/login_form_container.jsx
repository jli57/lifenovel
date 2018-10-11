import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import LoginForm from './login_form';

const mapStateToProps = ( state, ownProps) => {
  console.log(ownProps); 
  return {user: { email: "", password: ""},
  header: ownProps.header};
};

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  fetchPosts: () => dispatch( fetchPosts() )
});

export default connect( mapStateToProps, mapDispatchToProps )( LoginForm );

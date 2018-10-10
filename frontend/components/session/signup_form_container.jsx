import { connect } from 'react-redux';

import { signup, login } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import SignupForm from './signup_form';

const mapStateToProps = state => ({
  user: {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birth_date: "",
    gender: "",
    mobile_number: ""
  }
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  fetchPosts: () => dispatch( fetchPosts() ),
});

export default connect( mapStateToProps, mapDispatchToProps )( SignupForm );

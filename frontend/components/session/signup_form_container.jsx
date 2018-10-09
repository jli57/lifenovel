import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions';
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
});

export default connect( mapStateToProps, mapDispatchToProps )( SignupForm );

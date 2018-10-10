import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({

});

export default connect( mapStateToProps, null )(Profile);

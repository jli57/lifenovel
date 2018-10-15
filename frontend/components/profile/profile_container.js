import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => ({
  profileUser: users[ownProps.match.params.userId],
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({

});

export default connect( mapStateToProps, null )(Profile);

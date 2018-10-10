import { connect } from 'react-redux';

import Footer from './footer';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

export default connect(
  mapStateToProps
)(Footer);

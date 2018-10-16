import { connect } from 'react-redux';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Notifications from './notifications';


const mapStateToProps = ({ entities: { users, posts }, session }, ownProps) => {
  const userId = Number(ownProps.match.params.userId) || 0;
  return {
    events: filterPosts( posts, userId),
    currentUser: users[session.id],
    user_ids: [userId],
  }
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect( mapStateToProps, null)( Notifications ));

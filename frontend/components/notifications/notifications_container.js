import { connect } from 'react-redux';
import { getPendingFriendRequests } from '../../reducers/selectors'; 
import { closeModal } from '../../actions/modal_actions'; 
import Notifications from './notifications';

const mapStateToProps = ({ entities: { users, posts }, session }) => {
  return {
    events: filterPosts( posts, userId),
    currentUser: users[session.id],
    pendingRelationships: getPendingFriendRequests(session.id, users),
  }
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch( closeModal() ),
});

export default connect( mapStateToProps, mapDispatchToProps)( Notifications );

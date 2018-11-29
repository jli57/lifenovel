import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NotificationsContainer from '../notifications/notifications_container';
import SearchResultsContainer from '../search/search_results_container';
import FriendRequestsContainer from '../notifications/friend_requests_container';
import MessageNotificationsContainer from '../notifications/message_notifications_container';

const HeaderModal = ({ modal, modalArgs, closeModal, modalType}) => {

  if ( !modal || modal !== modalType ) {
    return null;
  }

  let component;

  switch ( modal ) {
    case 'notifications':
      component = <NotificationsContainer />
      break;
    case 'friendRequests':
      component = <FriendRequestsContainer />
      break;
    case 'messages':
      component = <MessageNotificationsContainer />
      break;
    case 'search':
      component = <SearchResultsContainer />
      break;
    default:
      return null;
  }

  const handleClick = (e) => {
    e.stopPropagation();
    closeModal();
  }

  return (
    <div className="modal">
      <div className="transparent-modal-background" onClick={ handleClick }>
      </div>
      <div
        className="relative-modal-child"
        onClick={ e => e.stopPropagation() }>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal,
  modalArgs: state.ui.modalArgs
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch( closeModal() )
});

export default connect( mapStateToProps, mapDispatchToProps )( HeaderModal );

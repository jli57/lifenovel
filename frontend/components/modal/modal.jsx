import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import EditPostContainer from '../posts/edit_post_container';
import NotificationsContainer from '../notifications/notifications_container'; 

const Modal = ({ modal, modalArgs, closeModal }) => {
  if ( !modal ) {
    return null;
  }
  let component;
  switch ( modal ) {
    case 'editPost':
      component = <EditPostContainer postId={ modalArgs.postId } />
      break;
    case 'search':
      component = <NotificationsContainer />
      break; 
    case 'notifications': 
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={ closeModal }>
      <div className="fixed-modal-child" onClick={ e => e.stopPropagation() }>
        { component }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  modal: state.ui.modal,
  modalArgs: state.ui.modalArgs
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch( closeModal() )
});

export default connect( mapStateToProps, mapDispatchToProps )( Modal );

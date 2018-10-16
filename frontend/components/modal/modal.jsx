import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import EditPostContainer from '../posts/edit_post_container';
import NotificationsContainer from '../notifications/notifications_container'; 
import PostMenuContainer from '../posts/post_menu_container';

const Modal = ({ modal, modalArgs, closeModal }) => {
  if ( !modal ) {
    return null;
  }

  let { left, right, top, bottom } = modalArgs.pos; 

  let component;
  switch ( modal ) {
    case 'editPost':
      component = <EditPostContainer postId={ modalArgs.postId } />
      break;
    case 'postMenu':
      component = <PostMenuContainer />
      top += 10; 
      break;
    case 'search':
      component = <NotificationsContainer />
      break; 
    case 'notifications': 
    default:
      return null;
  }
  
  const handleClick = (e) => {
    e.stopPropagation();
    closeModal();
  }

  return modalArgs.mode === "absolute" ? 
  (
    <div className="modal-background" onClick={ closeModal }>
      <div className="fixed-modal-child" onClick={ e => e.stopPropagation() }>
        { component }
      </div>
    </div>
  ) : (
    <div className="modal">
      <div className="transparent-modal-background" onClick={ handleClick }>
      </div>
      <div className="relative-modal-child" style={{top: `${top}px`, left: `${left}px`}} onClick={ e => e.stopPropagation() }>
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

export default connect( mapStateToProps, mapDispatchToProps )( Modal );

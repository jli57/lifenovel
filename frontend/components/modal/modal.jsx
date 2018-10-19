import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import EditPostContainer from '../posts/edit_post_container';
import ProfilePhotoFormContainer from '../profile/profile_photo_form_container'; 
import PostMenuContainer from '../posts/post_menu_container';
import CommentMenuContainer from '../comments/comment_menu_container'; 

const Modal = ({ modal, modalArgs, closeModal, modalType, id }) => {

  if ( !modal || (modalType !== "general" && modal !== modalType ) ) {
    return null;
  }

  let component;

  switch ( modal ) {
    case 'editPost':
      component = <EditPostContainer postId={ modalArgs.postId } />
      break;
    case 'editProfilePhoto': 
      component = <ProfilePhotoFormContainer userId={modalArgs.userId}/>
      break; 
    case 'commentMenu': 
      if ( modalArgs.commentId === id ) {
        component = <CommentMenuContainer />
        break; 
      }
    case 'postMenu':
      if ( modalArgs.postId === id ) {
        component = <PostMenuContainer />
        break; 
      }
    case 'search':
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
      <div 
        className="relative-modal-child" 
        // style={{top: `${y}px`, left: `${x}px`}} 
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

export default connect( mapStateToProps, mapDispatchToProps )( Modal );

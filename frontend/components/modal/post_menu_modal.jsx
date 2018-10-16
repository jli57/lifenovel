import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import PostMenuContainer from '../posts/post_menu_container';

const PostMenuModal = ({ modal, modalArgs, closeModal, postId }) => {
  if ( !modal ) {
    return null;
  }
  let component;
  switch ( modal ) {
    case 'postMenu':
      if ( postId === modalArgs.postId ) {
        component = <PostMenuContainer />
        break;
      }
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
      <div className="relative-modal-child" onClick={ e => e.stopPropagation() }>
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
  closeModal: (e) => dispatch( closeModal())
});

export default connect( mapStateToProps, mapDispatchToProps )( PostMenuModal );

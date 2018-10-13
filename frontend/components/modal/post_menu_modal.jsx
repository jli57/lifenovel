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
      if ( postId === modalArgs[0]) {
        component = <PostMenuContainer />
        break;
      }
    default:
      return null;
  }

  return (
    <div className="modal">
      <div className="transparent-modal-background" onClick={ closeModal }>
      </div>
      <div className="modal-child" onClick={ e => e.stopPropagation() }>
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
  closeModal: (e) => {
    e.stopPropagation();
    dispatch( closeModal());
  }
});

export default connect( mapStateToProps, mapDispatchToProps )( PostMenuModal );

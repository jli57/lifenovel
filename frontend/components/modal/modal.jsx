import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react_redux';
import { PostMenu } from '';

const Modal = ({ modal, closeModal }) => {
  if ( !modal ) {
    return null;
  }
  let component;
  switch ( modeal ) {
    case 'postMenu':
      component = <PostMenu />;
    default:
      return null;
  }

  return (
    <div className="modal-Background" onClick={ closeModal }>
      <div className="modal-Child" onClick={ e => e.stopPropagation() }>
        { component }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch( closeModal() )
});

export default connect( mapStateToProps, mapDispatchToProps )(Modal);

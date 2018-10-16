import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/modal_actions';

const modalArgsReducer = ( state = {}, action ) => {
  switch( action.type) {
    case OPEN_MODAL:
      return action.modalArgs; 
    case CLOSE_MODAL:
      return {};
    default:
      return state;
  }
}

export default modalArgsReducer;

import {
  RECEIVE_LIKE_ERRORS,
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_actions';

const likeErrorsReducer = ( state = [], action ) => {
  Object.freeze(state);
  switch( action.type ) {
    case RECEIVE_LIKE_ERRORS:
      return action.errors;
    case RECEIVE_LIKE:
    case REMOVE_LIKE:
      return [];
    default:
      return state;
  }
};

export default likeErrorsReducer;

import {
  RECEIVE_USER_ERRORS,
  RECEIVE_USERS,
  RECEIVE_USER,
  RECEIVE_SEARCH_USERS, 
} from '../actions/user_actions';

const userErrorsReducer = ( state = [], action ) => {
  Object.freeze(state);
  switch( action.type ) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case RECEIVE_USERS:
    case RECEIVE_USER:
    case RECEIVE_SEARCH_USERS:
      return [];
    default:
      return state;
  }
};

export default userErrorsReducer;

import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import {
  RECEIVE_USERS,
  RECEIVE_USER,
  RECEIVE_SEARCH_USERS,
} from '../actions/user_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge( {}, state, { [action.user.id]: action.user} );
    case RECEIVE_USER:
      return merge( {}, state, { [action.user.id]: action.user} );
    case RECEIVE_USERS:
    case RECEIVE_SEARCH_USERS:
      return merge( {}, state, action.users );
    default:
      return state;
  }
};

export default usersReducer;

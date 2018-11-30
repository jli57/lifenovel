import {
  RECEIVE_SEARCH_USERS,
  REMOVE_SEARCH_USERS
} from '../actions/user_actions';

const searchUsersReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_USERS:
      return Object.keys(action.users).map( id => parseInt(id));
    case REMOVE_SEARCH_USERS:
      return [];
    default:
      return state;
  }
};

export default searchUsersReducer;

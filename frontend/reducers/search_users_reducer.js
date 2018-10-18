import {
  RECEIVE_SEARCH_USERS
} from '../actions/user_actions';

const searchUsersReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_USERS: 
      return Object.keys(action.users).map( id => parseInt(id)); 
    default:
      return state;
  }
};

export default searchUsersReducer;

import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import merge from 'lodash/merge';

const userRelationshipsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge( {}, state, action.user_relationships || {} );
    default:
      return state;
  }
};

export default userRelationshipsReducer;

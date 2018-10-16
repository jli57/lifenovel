import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import {
  RECEIVE_USER_RELATIONSHIP,
  REMOVE_USER_RELATIONSHIP,
} from '../actions/user_relationship_actions';
import merge from 'lodash/merge';

const userRelationshipsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge( {}, state, action.userRelationships || {} );
    case RECEIVE_USER_RELATIONSHIP:
      return merge( {}, state, action.userRelationship );
    case REMOVE_USER_RELATIONSHIP:
      let newState = merge( {}, state );
      delete newState[action.userRelationshipId];
      return newState;
    default:
      return state;
  }
};

export default userRelationshipsReducer;

import {
  RECEIVE_USER_RELATIONSHIP_ERRORS,
  RECEIVE_USER_RELATIONSHIP,
  REMOVE_USER_RELATIONSHIP,
} from '../actions/user_relationship_actions';

const userRelationshipErrorsReducer = ( state = [], action ) => {
  Object.freeze(state);
  switch( action.type ) {
    case RECEIVE_USER_RELATIONSHIP_ERRORS:
      return action.errors;
    case RECEIVE_USER_RELATIONSHIP:
    case REMOVE_USER_RELATIONSHIP:
      return [];
    default:
      return state;
  }
};

export default userRelationshipErrorsReducer;

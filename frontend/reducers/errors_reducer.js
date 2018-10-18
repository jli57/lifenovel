import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import postErrorsReducer from './post_errors_reducer';
import userRelationshipErorsReducer from './user_relationship_errors_reducer';
import likeErrorsReducer from './like_errors_reducer'; 
import userErrorsReducer from './user_errors_reducer'; 

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  posts: postErrorsReducer,
  userRelationships: userRelationshipErorsReducer,
  likes: likeErrorsReducer,
  users: userErrorsReducer, 
});

export default errorsReducer;

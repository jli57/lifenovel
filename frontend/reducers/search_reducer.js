import { combineReducers } from 'redux';

import searchUsersReducer from './search_users_reducer';

const searchReducer = combineReducers({
  users: searchUsersReducer,
});

export default searchReducer;

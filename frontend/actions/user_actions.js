import * as APIUtil from "../util/user_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RECEIVE_SEARCH_USERS = "RECEIVE_SEARCH_USERS"; 

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

const receiveSearchUsers = (users) => ({
  type: RECEIVE_SEARCH_USERS, 
  users 
}); 

export const fetchUsers = (userIds) => dispatch => (
  APIUtil.fetchUsers(userIds)
    .then(
      (users) => dispatch(receiveUsers(users)),
      (errors) => dispatch(receiveUserErrors(errors.responseJSON))
    )
);

export const searchUsers = (searchText) => dispatch => (
  APIUtil.searchUsers(searchText)
    .then(
      (users) => dispatch(receiveSearchUsers(users)), 
      (errors) => dispatch(receiveUserErrors(errors.responseJSON))
    )
); 

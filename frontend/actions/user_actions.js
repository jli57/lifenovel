import * as APIUtil from "../util/user_api_util";
import { closeModal } from "./modal_actions";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const fetchUsers = (userIds) => dispatch => (
  APIUtil.fetchUsers(userIds)
    .then(
      (users) => dispatch(receiveUsers(users)),
      (errors) => dispatch(receiveUserErrors(errors.responseJSON))
    )
);

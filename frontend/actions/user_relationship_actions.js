import * as APIUtil from "../util/user_relationship_api_util";

export const RECEIVE_USER_RELATIONSHIP = "RECEIVE_USER_RELATIONSHIP";
export const REMOVE_USER_RELATIONSHIP = "REMOVE_USER_RELATIONSHIP";
export const RECEIVE_USER_RELATIONSHIP_ERRORS = "RECEIVE_USER_RELATIONSHIP_ERRORS";

const receiveUserRelationship = (userRelationship) => ({
  type: RECEIVE_USER_RELATIONSHIP,
  userRelationship
});

const removeUserRelationship = (userRelationshipId) => ({
  type: REMOVE_USER_RELATIONSHIP,
  userRelationshipId
});

const receiveUserRelationshipErrors = (errors) => ({
  type: RECEIVE_USER_RELATIONSHIP_ERRORS,
  errors
});

export const createUserRelationship = (userRelationship) => dispatch => (
  APIUtil.createUserRelationship(userRelationship)
    .then(
      (userRelationship) => dispatch(receiveUserRelationship(userRelationship)),
      (errors) => dispatch( receiveUserRelationshipErrors(errors.responseJSON))
    )
);

export const updateUserRelationship = (userRelationship) => dispatch => (
  APIUtil.updateUserRelationship(userRelationship)
    .then(
      (userRelationship) => { dispatch(receiveUserRelationship(userRelationship)) },
      (errors) => dispatch( receiveUserRelationshipErrors(errors.responseJSON))
  )
);

export const deleteUserRelationship = (userRelationshipId) => dispatch => (
  APIUtil.deleteUserRelationship(userRelationshipId)
    .then(
      () => dispatch( removeUserRelationship(userRelationshipId)),
      (errors) => dispatch( receiveUserRelationshipErrors(errors.responseJSON))
    )
);

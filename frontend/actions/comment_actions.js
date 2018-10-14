import * as APIUtil from "../util/comment_util";
import { closeModal } from "./modal_actions";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveComments = ({comments}) => ({
  type: RECEIVE_COMMENTS,
  comments
});

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
});

const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const fetchComments = () => dispatch => (
  APIUtil.fetchComments()
    .then(
      (comments) => dispatch(receiveComments(comments)),
      (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
    )
);

export const createComment = (comment) => dispatch => (
  APIUtil.createComment(comment)
    .then(
      (comment) => dispatch(receiveComment(comment)),
      (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
  )
);

export const updateComment = (comment) => dispatch => (
  APIUtil.updateComment(comment)
    .then(
      (comment) => { dispatch(receiveComment(comment)), dispatch(closeModal()) },
      (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
  )
);

export const deleteComment = (commentId) => dispatch => (
  APIUtil.deleteComment(commentId)
    .then(
      () => dispatch(removeComment(commentId)),
      (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
    )
);

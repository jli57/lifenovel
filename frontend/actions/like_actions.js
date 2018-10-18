import * as APIUtil from "../util/like_api_util";

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";

const receiveLikes = ({likes}) => ({
  type: RECEIVE_LIKES,
  likes
});

const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = (likeId) => ({
  type: REMOVE_LIKE,
  likeId
});

const receiveLikeErrors = (errors) => ({
  type: RECEIVE_LIKE_ERRORS,
  errors
});

export const fetchLikes = (options) => dispatch => (
  APIUtil.fetchLikes(options)
    .then(
      (likes) => dispatch(receiveLikes(likes)),
      (errors) => dispatch(receiveLikeErrors(errors.responseJSON))
    )
);

// export const fetchLike = (likeId) => dispatch => (
//   APIUtil.fetchLike(likeId) 
//     .then(
//       (like) => dispatch(receiveLike(like)),
//       (errors) => dispatch(receiveLikeErrors(errors.responseJSON))     
//     )
// ); 

export const createLike = (like) => dispatch => (
  APIUtil.createLike(like)
    .then(
      (like) => dispatch(receiveLike(like)),
      (errors) => dispatch(receiveLikeErrors(errors.responseJSON))
  )
);

// export const updateLike = (like) => dispatch => (
//   APIUtil.updateLike(like)
//     .then(
//       (like) => { dispatch(receiveLike(like)), dispatch(closeModal()) },
//       (errors) => dispatch(receiveLikeErrors(errors.responseJSON))
//   )
// );

export const deleteLike = (likeId) => dispatch => (
  APIUtil.deleteLike(likeId)
    .then(
      () => dispatch(removeLike(likeId)),
      (errors) => dispatch(receiveLikeErrors(errors.responseJSON))
    )
);

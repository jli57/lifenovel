import * as APIUtil from "../util/post_util";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
});

const receivePostErrors = (errors) => ({
  type: RECEIVE_POST_ERRORS,
  errors
});

export const fetchPosts = () => dispatch => (
  APIUtil.fetchPosts()
    .then(
      (posts) => dispatch(receivePosts(posts)),
      (errors) => dispatch(receivePostErrors(errors))
    )
);

export const createPost = (post) => dispatch => (
  APIUtil.createPost(post)
    .then(
      (post) => dispatch(receivePost(post)),
      (errors) => dispatch(receivePostErrors(errors))
  )
);

export const updatePost = (post) => dispatch => (
  APIUtil.updatePost(post)
    .then(
      (post) => dispatch(receivePost(post)),
      (errors) => dispatch(receivePostErrors(errors))
  )
);

export const deletePost = (postId) => dispatch => (
  APIUtil.deletePost(postId)
    .then(
      () => dispatch(removePost(postId)),
      (errors) => dispatch(receivePostErrors(errors))
    )
);

import {
  RECEIVE_POSTS,
} from '../actions/post_actions';
import {
  RECEIVE_LIKE,
  RECEIVE_LIKES,
  REMOVE_LIKE,
} from '../actions/like_actions';
import merge from 'lodash/merge';

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch( action.type) {
    case RECEIVE_POSTS:
      return merge({}, state, action.likes || {});
    case RECEIVE_LIKES: 
      return merge({}, state, action.likes || {}); 
    case RECEIVE_LIKE:
      return merge( {}, state, action.like );
    case REMOVE_LIKE:
      let newState = merge( {}, state );
      delete newState[action.likeId];
      return newState;
    default:
      return state;
  }
}

export default likesReducer;

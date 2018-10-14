import {
  RECEIVE_POSTS,
} from '../actions/post_actions';
import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from '../actions/comment_actions';
import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch( action.type) {
    case RECEIVE_POSTS:
      return merge({}, state, action.comments || {});
    case RECEIVE_COMMENT:
      return merge( {}, state, action.comment );
    case REMOVE_COMMENT:
      let newState = merge( {}, state );
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
}

export default commentsReducer;

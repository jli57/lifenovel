import {
  RECEIVE_POST,
  REMOVE_POST
} from '../actions/post_actions';
import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POST:
      return merge( state, { [post.id]: post.post} );
    case REMOVE_POST:
      let newState = merge( {}, state);
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;

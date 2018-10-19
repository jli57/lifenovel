import {
 RECEIVE_LOGIN, 
 REMOVE_LOGIN
} from '../actions/login_actions';
const postsReducer = (state = { loginDemo: () => { return; } }, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LOGIN:
      return { loginDemo: action.loginDemo };
    case REMOVE_LOGIN: 
      return state; 
    default:
      return state;
  }
};

export default postsReducer;

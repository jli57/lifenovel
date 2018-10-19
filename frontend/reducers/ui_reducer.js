import { combineReducers } from 'redux';

import loginReducer from './login_reducer'; 
import modalReducer from './modal_reducer';
import modalArgsReducer from './modal_args_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  modalArgs: modalArgsReducer, 
  login: loginReducer, 
});

export default uiReducer;

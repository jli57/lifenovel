import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import modalArgsReducer from './modal_args_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  modalArgs: modalArgsReducer
});

export default uiReducer;

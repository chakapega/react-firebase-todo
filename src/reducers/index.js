import { combineReducers } from 'redux';

import authenticationReducer from './authenticationReducer';
import mainReducer from './mainReducer';

const rootReducer = combineReducers({
  user: authenticationReducer,
  showNewTaskForm: mainReducer
});

export default rootReducer;
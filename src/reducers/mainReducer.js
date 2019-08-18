import { PASS_SHOW_NEW_TASK_FORM_FUNCTION } from '../actions/mainActionTypes';

const initialState = {
  showNewTaskForm: null
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case PASS_SHOW_NEW_TASK_FORM_FUNCTION:
      return { ...state, showNewTaskForm: action.payload };
    default:
      return state
  }
};

export default mainReducer;
import { PASS_SHOW_NEW_TASK_FORM_FUNCTION } from './mainActionTypes';

export const passShowNewTaskFormFunction = showNewTaskForm => {
  return {
    type: PASS_SHOW_NEW_TASK_FORM_FUNCTION,
    payload: showNewTaskForm,
  };
};
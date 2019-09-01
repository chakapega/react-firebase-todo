import React from 'react';
import ReactDOM from 'react-dom';

import './TaskForm.css';

const TaskForm = ({ closeTaskForm, isAddingNewTask, addTask, editTask, editableTask = {} }) => {
  const { taskText = '' } = editableTask;
  const handleSubmit = isAddingNewTask ? addTask : editTask;
  const divModal = document.getElementById('modal');

  return (
    ReactDOM.createPortal(
      <div className="modal_container">
        <form className="task-form" onSubmit={handleSubmit}>
          <div className="input-field">
            <input maxLength="60" name="taskText" id="input_task-text" type="text" className="validate" defaultValue={taskText}></input>
            <label className={isAddingNewTask ? '' : 'active'} htmlFor="input_task-text">
              {
                isAddingNewTask ? 'The text of your new task' : 'The text of your task'
              }
            </label>
          </div>
          <div className="task-form__buttons">
            <button type="submit" className="waves-effect waves-light btn">
              {
                isAddingNewTask ? 'Add' : 'Edit'
              }
            </button>
            <button type="button" className="waves-effect waves-light btn" onClick={closeTaskForm}>Cancel</button>
          </div>
        </form>
      </div>
      ,
      divModal
    )
  );
};

export default TaskForm;
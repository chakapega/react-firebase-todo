import React from 'react';
import ReactDOM from 'react-dom';

const TaskForm = ({ closeTaskForm, isAddingNewTask, addTask, editTask, editableTask = {} }) => {
  const { name = '', description = '' } = editableTask;
  const handleSubmit = isAddingNewTask ? addTask : editTask;
  const divModal = document.getElementById('modal');

  return (
    ReactDOM.createPortal(
      <div className="modal_container">
        <div className='row'>
          <form className="white col s12" onSubmit={handleSubmit}>
            <div className="input-field col s12">
              <input name="name" id="input_name" type="text" className="validate" defaultValue={name}></input>
              <label className={isAddingNewTask ? '' : 'active'} htmlFor="input_name">
                {
                  isAddingNewTask ? 'The name of your new task' : 'The name of your task'
                }
              </label>
            </div>
            <div className="input-field col s12">
              <textarea name="description" id="textarea_description" className="materialize-textarea" defaultValue={description}></textarea>
              <label className={isAddingNewTask ? '' : 'active'} htmlFor="textarea_description">
                {
                  isAddingNewTask ? 'Description of your new task' : 'Description of your task'
                }
              </label>
            </div>
            <div className="center">
              <button type="submit" className="waves-effect waves-light btn">
                {
                  isAddingNewTask ? 'Add' : 'Edit'
                }
              </button>
              <button type="button" className="waves-effect waves-light btn" onClick={closeTaskForm}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
      ,
      divModal
    )
  );
};

export default TaskForm;
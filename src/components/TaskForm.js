import React from 'react';

const TaskForm = props =>  {
  const { closeTaskForm, isAddingNewTask, addTask, editTask, editableTask = {} } = props;
  const { name = '', description = '' } = editableTask;
  const handleSubmit = isAddingNewTask ? addTask : editTask;

  const modalContainerStyle = {
    width: 100 + '%',
    height: 100 + 'vh',
    position: 'absolute',
    background: '#00000030',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={modalContainerStyle} className="modal_container">
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
          <div style={{margin: 10 + 'px'}} className="center">
            <button style={{margin: 10 + 'px'}} type="submit" className="waves-effect waves-light btn">
              {
                isAddingNewTask ? 'Add' : 'Edit'
              }
            </button>
            <button style={{margin: 10 + 'px'}} type="button" className="waves-effect waves-light btn" onClick={closeTaskForm}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
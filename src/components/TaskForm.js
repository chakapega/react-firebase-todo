import React from 'react';
import './TaskForm.css';

const TaskForm = props =>  {
  const { closeTaskForm, isAddingNewTask, addTask, editTask, editableTask = {} } = props;

  const { name = '', description = '' } = editableTask;

  const handleSubmit = isAddingNewTask ? addTask : editTask;

  return (
    <form className="task_form" onSubmit={handleSubmit}>
      <label className="task_form__label_name" htmlFor="task_form__input_name">
        {
          isAddingNewTask ? 'The name of your new task' : 'The name of your task'
        }
      </label>
      <input type="text" name="name" id="task_form__input_name" defaultValue={name}/>
      <label className="task_form__label_description" htmlFor="task_form__textarea_description">
        {
          isAddingNewTask ? 'Description of your new task' : 'Description of your task'
        }
      </label>
      <textarea name="description" id="task_form__textarea_description" cols="30" rows="5" defaultValue={description}></textarea>
      <div className="task_form__btns">
        <button type="submit" className="task_form__btn_submit">
          {
            isAddingNewTask ? 'Add' : 'Edit'
          }
        </button>
        <button type="button" className="task_form__btn_cancel" onClick={closeTaskForm}>Cancel</button>
      </div>
    </form>
  );
};

export default TaskForm;
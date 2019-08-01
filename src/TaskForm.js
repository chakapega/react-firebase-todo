import React from 'react';
import './TaskForm.css';

const TaskForm = props =>  {
    const { closeTaskForm, isAddingNewTask, addTask, editTask, editedDataTask: {
      name = '',
      description = '',
    } = {} } = props;

    const handleSubmit = isAddingNewTask ? addTask : editTask;

    return (
        <form className="new-task_form" onSubmit={handleSubmit}>
          <label className="new-task_form__label_name" htmlFor="new-task_form__input_name">
            {
              isAddingNewTask ? 'The name of your new task' : 'The name of your task'
            }
          </label>
          <input type="text" name="name" id="new-task_form__input_name" defaultValue={name}/>
          <label className="new-task_form__label_description" htmlFor="new-task_form__textarea_description">
            {
              isAddingNewTask ? 'Description of your new task' : 'Description of your task'
            }
          </label>
          <textarea name="description" id="new-task_form__textarea_description" cols="30" rows="5" defaultValue={description}></textarea>
          <div className="new-task_form__btns">
            <button type="submit" className="new-task_form__btn_submit">
              {
                isAddingNewTask ? 'Add' : 'Edit'
              }
            </button>
            <button type="button" className="new-task_form__btn_cancel" onClick={closeTaskForm}>Cancel</button>
          </div>
        </form>
    );































    // if(isAddingNewTask) {
    //   const { addTask } = props;

    //   return (
    //     <form className="new-task_form" onSubmit={addTask}>
    //       <label className="new-task_form__label_name" htmlFor="new-task_form__input_name">The name of your new task</label>
    //       <input type="text" name="name" id="new-task_form__input_name"/>
    //       <label className="new-task_form__label_description" htmlFor="new-task_form__textarea_description">Description of your new task</label>
    //       <textarea name="description" id="new-task_form__textarea_description" cols="30" rows="5"></textarea>
    //       <div className="new-task_form__btns">
    //         <button type="submit" className="new-task_form__btn_add">Add</button>
    //         <button type="button" className="new-task_form__btn_cancel" onClick={closeTaskForm}>Cancel</button>
    //       </div>
    //     </form>
    //   );
    // } else {
    //   const { name, description } = props.editedDataTask;
    //   const { editTask } = props;

    //   return (
    //     <form className="edit-task_form" onSubmit={editTask}>
    //       <label className="edit-task_form__label_name" htmlFor="edit-task_form__input_name">The name of your task</label>
    //       <input type="text" name="name" id="edit-task_form__input_name" defaultValue={name}/>
    //       <label className="edit-task_form__label_description" htmlFor="edit-task_form__textarea_description">Description of your task</label>
    //       <textarea name="description" id="edit-task_form__textarea_description" cols="30" rows="5" defaultValue={description}></textarea>
    //       <div className="edit-task_form__btns">
    //         <button type="submit" className="edit-task_form__btn_edit">Edit</button>
    //         <button type="button" className="edit-task_form__btn_cancel" onClick={closeTaskForm}>Cancel</button>
    //       </div>
    //     </form>
    //   );
    // };
};

export default TaskForm;
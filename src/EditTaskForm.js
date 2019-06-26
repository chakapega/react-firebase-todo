import React, { Component } from 'react';
import './EditTaskForm.css';

export default class EditTaskForm extends Component {
  editAddedTask = e => {
    e.preventDefault();

    const { editTask, showEditTaskForm } = this.props;
    const modifiedTask = {
      id: this.props.editedDataTask.id,
      name: e.target[0].value,
      description: e.target[1].value
    };

    editTask(modifiedTask);
    showEditTaskForm();
  };

  render() {
    const { showEditTaskForm } = this.props;
    const { name, description } = this.props.editedDataTask;

    return (
      <form className="new-task_form" onSubmit={this.editAddedTask}>
        <label className="new-task_form__label_name" htmlFor="new-task_form__input_name">The name of your task</label>
        <input type="text" name="name" id="new-task_form__input_name" defaultValue={name}/>
        <label className="new-task_form__label_description" htmlFor="new-task_form__textarea_description">Description of your task</label>
        <textarea name="description" id="new-task_form__textarea_description" cols="30" rows="5" defaultValue={description}></textarea>
        <div className="new-task_form__btns">
          <button type="submit" className="new-task_form__btn_add">Edit</button>
          <button type="button" className="new-task_form__btn_cancel" onClick={showEditTaskForm}>Cancel</button>
        </div>
      </form>
    );
  };
};
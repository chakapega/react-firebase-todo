import React, { Component } from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  render() {
    const showNewTaskForm = this.props.showNewTaskForm;
  
    return (
      <form className="new-task_form" onSubmit={this.addNewTask}>
        <label className="new-task_form__label_name" htmlFor="new-task_form__input_name">The name of your new task</label>
        <input type="text" name="name" id="new-task_form__input_name"/>
        <label className="new-task_form__label_description" htmlFor="new-task_form__textarea_description">Description of your new task</label>
        <textarea name="description" id="new-task_form__textarea_description" cols="30" rows="5"></textarea>
        <div className="new-task_form__btns">
          <button type="submit" className="new-task_form__btn_add">Add</button>
          <button type="button" className="new-task_form__btn_cancel" onClick={showNewTaskForm}>Cancel</button>
        </div>
      </form>
    );
  };

  addNewTask = e => {
    e.preventDefault();

    const getDataNewTask = this.props.getDataNewTask;
    const showNewTaskForm = this.props.showNewTaskForm;
    let task = {
      id: `${(+new Date).toString(16)}`,
      name: e.target[0].value,
      description: e.target[1].value
    };
    
    getDataNewTask(task);
    showNewTaskForm();
  };
};

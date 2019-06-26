import React, { Component } from 'react';
import './AddedTasks.css';
import deletePng from './images/delete.png';
import editPng from './images/edit.png';

export default class AddedTasks extends Component {
  editAddedTask = e => {
    e.preventDefault();
    
    const showEditTaskForm = this.props.showEditTaskForm;
    const getDataEditableTask = this.props.getDataEditableTask;
    const editTaskId = e.target.parentElement.parentElement.id;

    showEditTaskForm();
    getDataEditableTask(editTaskId);
  };

  getIdRemovedTask = e => {
    const removeTask = this.props.removeTask;
    const removedTaskId = e.target.parentElement.parentElement.id;
    
    removeTask(removedTaskId);
  };

  render() {
    const tasks = this.props.tasks;
    
    let tasksElements = tasks.map(task => {
      return (
        <div className="added-task_container" key={task.id} id={task.id}>
        <span className="added-task_span">{task.name} | {task.description}</span>
        <div className="image-container">
          <img className="img-edit" title="Edit" src={editPng} alt="edit" onClick={this.editAddedTask}/>
          <img className="img-delete" title="Remove" src={deletePng} alt="delete" onClick={this.getIdRemovedTask}/>
        </div>
        </div>
      );
    });
    
    return (
      <div>
        {tasksElements}
      </div>
    );
  };
};

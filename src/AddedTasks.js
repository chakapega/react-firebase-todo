import React, { Component } from 'react'
import './AddedTasks.css'
import deletePng from './images/delete.png'
import editPng from './images/edit.png'

export default class AddedTasks extends Component {
  render() {
    let tasks = this.props.tasks;

    let tasksElements = tasks.map(task => {
      return (
        <div className="added-task_container" key={task.id} id={task.id}>
        <span className="added-task_span">{task.name} | {task.description}</span>
        <div className="image-container">
          <img className="img-edit" title="Edit" src={editPng} alt="edit"/>
          <img className="img-delete" title="Remove" src={deletePng} alt="delete"/>
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

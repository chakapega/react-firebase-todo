import React, { Component } from 'react';
import './AddedTasks.css';
import deletePng from './images/delete.png';
import editPng from './images/edit.png';

export default class AddedTasks extends Component {
  render() {
    const { tasks, removeTask, showTaskForm } = this.props;
    
    let tasksElements = tasks.map(task => {
    const { id, name, description } = task;

      return (
        <div className="added-task_container" key={id} id={id}>
        <span className="added-task_span">{name} | {description}</span>
        <div className="image-container">
          <img className="img-edit" title="Edit" src={editPng} alt="edit" onClick={showTaskForm}/>
          <img className="img-delete" title="Remove" src={deletePng} alt="delete" onClick={removeTask}/>
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

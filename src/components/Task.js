import React from 'react';

import './Task.css';

export default function Task({ task, taskPriorityToggle, removeTask, showEditableTaskForm }) {
  const { id, taskText, isImportant = false } = task;

  return (
    <li className="collection-item task-container">
      <span className={ isImportant ? 'task-text task-important' : 'task-text' }>
        {taskText}
      </span>
      <div className='task_icons__container'>
        <i className="material-icons" title='Task priority' onClick={() => taskPriorityToggle(id, isImportant)}>priority_high</i>
        <i className="material-icons" title='Edit task' onClick={() => showEditableTaskForm(id)}>edit</i>
        <i className="material-icons" title='Remove task' onClick={() => removeTask(id)}>delete</i>
      </div>
    </li>
  );
};
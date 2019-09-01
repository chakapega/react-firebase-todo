import React from 'react';

import './Task.css';

export default function Task({ task , removeTask , showEditableTaskForm }) {
  const { id, taskText } = task;

  return (
    <li className="collection-item task-container">
      {taskText}
      <div className='task_icons__container'>
        <i className="material-icons" title='Edit task' onClick={() => showEditableTaskForm(id)}>edit</i>
        <i className="material-icons" title='Remove task' onClick={() => removeTask(id)}>delete</i>
      </div>
    </li>
  );
};
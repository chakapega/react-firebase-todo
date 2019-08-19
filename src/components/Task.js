import React from 'react';

import './Task.css';

export default function Task({ task , removeTask , showEditableTaskForm, openSelectedTask }) {
  const { id, name, description } = task;

  return (
    <li id={id}>
      <div id='task_name__container' className="collapsible-header" onClick={openSelectedTask}>
        {name}
        <div className='task_icons__container'>
          <i className="material-icons" title='Edit task' onClick={() => showEditableTaskForm(id)}>edit</i>
          <i className="material-icons" title='Remove task' onClick={() => removeTask(id)}>delete</i>
        </div>
      </div>
      <div className="collapsible-body"><span>{description}</span></div>
    </li>
  );
};
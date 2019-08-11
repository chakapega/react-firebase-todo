import React from 'react';
import deletePng from '../images/delete.png';
import editPng from '../images/edit.png';

import './Task.css';

export default function Task({ task , removeTask , showEditableTaskForm }) {
  const { id, name, description } = task;

  return (
    <div className="task_container">
      <span className="task_name">{name}</span>
      <span className="task_description">{description}</span>
      <div className="influence_container">
        <img className="img_edit" title="Edit" src={editPng} alt="img-edit" onClick={() => showEditableTaskForm(id)}/>
        <img className="img_delete" title="Remove" src={deletePng} alt="img-delete" onClick={() => removeTask(id)}/>
      </div>
    </div>
  );
};
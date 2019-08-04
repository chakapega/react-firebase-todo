import React from 'react';
import deletePng from '../images/delete.png';
import editPng from '../images/edit.png';
import './Task.css';

export default function Task({ task , removeTask , showEditableTaskForm }) {
  const { id, name, description } = task;

  return (
    <div className="added-task">
      <span className="added-task_name">{name}</span>
      <span className="added-task_description">{description}</span>
      <div className="image-container">
        <img className="img-edit" title="Edit" src={editPng} alt="edit" onClick={() => showEditableTaskForm(id)}/>
        <img className="img-delete" title="Remove" src={deletePng} alt="delete" onClick={() => removeTask(id)}/>
      </div>
    </div>
  );
};
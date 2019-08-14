import React from 'react';
import deletePng from '../images/delete.png';
import editPng from '../images/edit.png';

export default function Task({ task , removeTask , showEditableTaskForm }) {
  const { id, name, description } = task;

  return (
    <li>
      <div style={{display: 'flex', justifyContent: 'space-between'}} className="collapsible-header">
        {name}
        <div>
          <i className="material-icons" onClick={() => showEditableTaskForm(id)}>edit</i>
          <i className="material-icons" onClick={() => removeTask(id)}>delete</i>
        </div>
      </div>
      <div className="collapsible-body"><span>{description}</span></div>
    </li>
  );
};


{/* <span className="task_name">{name}</span>
      <span className="task_description">{description}</span>
      <div className="influence_container">
        <img className="img_edit" title="Edit" src={editPng} alt="img-edit" onClick={() => showEditableTaskForm(id)}/>
        <img className="img_delete" title="Remove" src={deletePng} alt="img-delete" onClick={() => removeTask(id)}/>
      </div> */}
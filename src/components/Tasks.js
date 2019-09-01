import React from 'react';

import Task from './Task';

export default function Tasks({ tasks, removeTask, showEditableTaskForm }) {
  return (
    <ul className="collection">
      {tasks.map(task => (
        <Task key={task.id} task={task} removeTask={removeTask} showEditableTaskForm={showEditableTaskForm}/>
      ))}
    </ul>
  );
};

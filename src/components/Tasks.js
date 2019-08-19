import React from 'react';

import Task from './Task';

export default function Tasks({ tasks, removeTask, showEditableTaskForm, openSelectedTask }) {
  return (
    <ul className="collapsible popout">
      {tasks.map(task => (
        <Task key={task.id} task={task} removeTask={removeTask} showEditableTaskForm={showEditableTaskForm} openSelectedTask={openSelectedTask}/>
      ))}
    </ul>
  );
};

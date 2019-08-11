import React from 'react';
import Task from './Task';

import './Tasks.css';

export default function Tasks({ tasks, removeTask, showEditableTaskForm }) {
  return (
    <div className='tasks_container'>
      {tasks.map(task => (
        <Task key={task.id} task={task} removeTask={removeTask} showEditableTaskForm={showEditableTaskForm}/>
      ))}
    </div>
  );
};

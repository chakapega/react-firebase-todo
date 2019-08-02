import React from 'react';
import Task from './Task';

export default function Tasks({ tasks, removeTask, showEditableTaskForm }) {
  return (
    <div className='tasks'>
      {tasks.map(task => (
        <Task key={task.id} task={task} removeTask={removeTask} showEditableTaskForm={showEditableTaskForm}/>
      ))}
    </div>
  );
};

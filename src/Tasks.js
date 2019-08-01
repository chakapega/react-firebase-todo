import React from 'react';
import Task from './Task';

export default function Tasks({ tasks, removeTask, showTaskForm }) {
  return (
    <div className='tasks'>
      {tasks.map(task => (
        <Task key={task.id} task={task} removeTask={() => removeTask(task.id)} showTaskForm={() => showTaskForm(task.id)}/>
      ))}
    </div>
  );
};

import React from 'react';
import Task from './Task';

export default function Tasks({ tasks, removeTask, showTaskForm }) {
  console.log('array',tasks);
  console.log('first element',tasks[0]);
  return (
    <div className='tasks'>
      {tasks.map(task => (
        <Task key={task.id} task={task} removeTask={removeTask} showTaskForm={showTaskForm}/>
      ))}
    </div>
  );
};

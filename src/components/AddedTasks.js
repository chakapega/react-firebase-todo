import React from 'react';
import Tasks from './Tasks';

export default function AddedTasks({ tasks, removeTask, showEditableTaskForm, openSelectedTask }) {
  return (
    <div className='col s12'>
      <h4>Added tasks:</h4>
      <Tasks tasks={tasks} removeTask={removeTask} showEditableTaskForm={showEditableTaskForm} openSelectedTask={openSelectedTask}/>
    </div>
  );
};
import React from 'react';
import Tasks from './Tasks';

function AddedTasks(props) {
  const { tasks, removeTask, showEditableTaskForm } = props;
  
  return (
    <Tasks tasks={tasks} removeTask={removeTask} showEditableTaskForm={showEditableTaskForm}/>
  );
};

export default AddedTasks;
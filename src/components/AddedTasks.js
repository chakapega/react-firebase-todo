import React from 'react';
import Tasks from './Tasks';

export default function AddedTasks(props) {
  const { tasks, removeTask, showEditableTaskForm, openSelectedTask } = props;
  
  return (
    <Tasks tasks={tasks} removeTask={removeTask} showEditableTaskForm={showEditableTaskForm} openSelectedTask={openSelectedTask}/>
  );
};
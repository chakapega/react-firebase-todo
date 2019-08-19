import React from 'react';
import Tasks from './Tasks';

export default function AddedTasks({ tasks, removeTask, showEditableTaskForm, openSelectedTask }) {
  return (
    <Tasks tasks={tasks} removeTask={removeTask} showEditableTaskForm={showEditableTaskForm} openSelectedTask={openSelectedTask}/>
  );
};
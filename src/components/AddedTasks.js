import React, { Fragment } from 'react';
import Tasks from './Tasks';

export default function AddedTasks({ tasks, taskPriorityToggle, removeTask, showEditableTaskForm, openSelectedTask }) {
  return (
    <Fragment>
      <h4>Added tasks:</h4>
      {tasks.length ?
        <Tasks tasks={tasks} taskPriorityToggle={taskPriorityToggle} removeTask={removeTask} showEditableTaskForm={showEditableTaskForm} openSelectedTask={openSelectedTask}/>
        :
        null
      }
    </Fragment>
  );
};
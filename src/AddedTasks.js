import React, { Component } from 'react';
import Tasks from './Tasks';

export default class AddedTasks extends Component {
  render() {
    const { tasks, removeTask, showEditableTaskForm } = this.props;
    
    return (
      <Tasks tasks={tasks} removeTask={removeTask} showEditableTaskForm={showEditableTaskForm}/>
    );
  };
};

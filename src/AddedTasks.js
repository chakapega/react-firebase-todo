import React, { Component } from 'react';
import Tasks from './Tasks';

export default class AddedTasks extends Component {
  render() {
    const { tasks, removeTask, showTaskForm } = this.props;
    
    return (
      <Tasks tasks={tasks} removeTask={removeTask} showTaskForm={showTaskForm}/>
    );
  };
};

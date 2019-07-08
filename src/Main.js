import React, { Component } from 'react';
import './Main.css';
import AddedTasks from './AddedTasks';
import TaskForm from './TaskForm';

export default class Main extends Component {
  state = {
    tasks: [],
    editedDataTask: null,
    isOpenTaskForm: false,
    isAddingNewTask: false
  };

  showTaskForm = e => {
    const { isOpenTaskForm } = this.state;

    if(e.target.className === 'add-new-task__button') {
      this.setState({
        isOpenTaskForm: !isOpenTaskForm,
        isAddingNewTask: true
      });
    } else {
      const editTaskId = e.target.parentElement.parentElement.id;

      this.state.tasks.map(task => {
        if(task.id === editTaskId) {
          this.setState({
            editedDataTask: task,
            isOpenTaskForm: !isOpenTaskForm,
            isAddingNewTask: false
          });
        };
      });
    };
  };

  closeTaskForm = () => {
    const { isOpenTaskForm } = this.state;

    this.setState({
      isOpenTaskForm: !isOpenTaskForm,
      isAddingNewTask: false
    });
  };

  addTask = e => {
    e.preventDefault();

    const { tasks } = this.state;
    const task = {
      id: `${(+new Date).toString(16)}`,
      name: e.target[0].value,
      description: e.target[1].value
    };

    this.setState({ tasks: [...tasks, task] });

    this.closeTaskForm();
  };

  editTask = e => {
    e.preventDefault();

    const { tasks } = this.state;

    tasks.map(task => {
      if(task.id === this.state.editedDataTask.id) {
        task.name = e.target[0].value;
        task.description = e.target[1].value;
      };
    });

    this.closeTaskForm();
  };

  removeTask = e => {
    const { tasks } = this.state;
    const removedTaskId = e.target.parentElement.parentElement.id;
    const filteredTasks = tasks.filter(task => {
      return task.id !== removedTaskId;
    });

    this.setState({
      tasks: filteredTasks
    });
  };

  render() {
    const addedTasks = <AddedTasks
      tasks={this.state.tasks}
      showTaskForm={this.showTaskForm}
      removeTask={this.removeTask}
    />;
    const taskForm = this.state.isOpenTaskForm && <TaskForm
      closeTaskForm={this.closeTaskForm}
      addTask={this.addTask}
      isAddingNewTask={this.state.isAddingNewTask}
      editTask={this.editTask}
      editedDataTask={this.state.editedDataTask}
    />;

    return (
      <main>
        <div className='added-tasks_container'>
          <div className='added-tasks_container__header'>
            <button className="add-new-task__button" onClick={this.showTaskForm}>Add Task</button>
            <span className='added-tasks__span'>Added tasks:</span>
          </div>
          {taskForm}
          {addedTasks}
        </div>
      </main>
    );
  };
};
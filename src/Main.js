import React, { Component } from 'react';
import './Main.css';
import AddedTasks from './AddedTasks';
import TaskForm from './TaskForm';

export default class Main extends Component {
  state = {
    tasks: [],
    editedDataTask: undefined,
    isOpenTaskForm: false,
    isAddingNewTask: false,
  };

  showTaskForm = () => {
    const { isOpenTaskForm } = this.state;

    this.setState({
      isOpenTaskForm: !isOpenTaskForm,
      isAddingNewTask: true,
    });
  };

  showEditingTask = taskId => {
    const { isOpenTaskForm, tasks } = this.state;

    const task = tasks.find(task => task.id === taskId);

    this.setState({
      editedDataTask: task,
      isOpenTaskForm: !isOpenTaskForm,
      isAddingNewTask: false,
    });
  };

  closeTaskForm = () => {
    const { isOpenTaskForm } = this.state;

    this.setState({
      isOpenTaskForm: !isOpenTaskForm,
      isAddingNewTask: false,
    });
  };

  addTask = e => {
    e.preventDefault();

    const { tasks } = this.state;
    const task = {
      id: `${(+new Date()).toString(16)}`,
      name: e.target[0].value,
      description: e.target[1].value,
    };

    this.setState({ tasks: [...tasks, task] });

    this.closeTaskForm();
  };

  editTask = e => {
    e.preventDefault();

    const { tasks } = this.state;
    const newtasks = [...tasks];

    newtasks.forEach(task => {
      if (task.id === this.state.editedDataTask.id) {
        task.name = e.target[0].value;
        task.description = e.target[1].value;
      }
    });

    this.setState({
      tasks: newtasks,
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
      tasks: filteredTasks,
    });
  };

  render() {
    const {
      isOpenTaskForm,
      isAddingNewTask,
      editedDataTask,
      tasks,
    } = this.state;

    return (
      <main className="todos">
        <div className="added-tasks_container">
          <div className="added-tasks_container__header">
            <button
              className="add-new-task__button"
              onClick={this.showTaskForm}
            >
              Add Task
            </button>
            <span className="added-tasks__span">Added tasks:</span>
          </div>

          {isOpenTaskForm && (
            <TaskForm
              closeTaskForm={this.closeTaskForm}
              addTask={this.addTask}
              editTask={this.editTask}
              isAddingNewTask={isAddingNewTask}
              editedDataTask={editedDataTask}
            />
          )}

          <AddedTasks
            tasks={tasks}
            showTaskForm={this.showEditingTask}
            removeTask={this.removeTask}
          />
        </div>
      </main>
    );
  }
}

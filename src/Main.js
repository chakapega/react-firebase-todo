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

  componentDidMount() {
    const tasks = [];

    this.updateState();
  };

  updateState = () => {
    const tasks = [];

    window.db.collection("todos").get()
      .then(querySnapshot => {
        querySnapshot.forEach(document => {
          const newDocument = document.data();
          newDocument.id = document.id;

          tasks.push(newDocument);
      });

      this.setState({
        tasks: tasks
      });
    });
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

    window.db.collection("todos").add({
      name: e.target[0].value,
      description: e.target[1].value
    });

    this.updateState();

    this.closeTaskForm();
  };

  editTask = e => {
    e.preventDefault();

    const { id } = this.state.editedDataTask;

    window.db.collection('todos').doc(id).update({
      name: e.target[0].value,
      description: e.target[1].value
    });

    this.updateState();

    this.closeTaskForm();
  };

  removeTask = e => {
    const removedTaskId = e.target.parentElement.parentElement.id;

    window.db.collection('todos').doc(removedTaskId).delete();

    this.updateState();
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
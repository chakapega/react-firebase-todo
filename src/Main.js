import React, { Component } from 'react';
import './Main.css';
import AddedTasks from './AddedTasks';
import TaskForm from './TaskForm';

export default class Main extends Component {
  state = {
    tasks: [],
    editableTask: null,
    isOpenTaskForm: false,
    isAddingNewTask: false
  };

  componentDidMount() {
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

  showNewTaskForm = () => {
    this.setState({
      isOpenTaskForm: true,
      isAddingNewTask: true
    });
  };

  showEditableTaskForm = id => {
    const { tasks } = this.state;

    const editableTask = tasks.find(task => task.id === id);

    this.setState({
      editableTask: editableTask,
      isOpenTaskForm: true,
      isAddingNewTask: false,
    });
  };

  closeTaskForm = () => {
    this.setState({
      isOpenTaskForm: false,
      isAddingNewTask: false
    });
  };

  addTask = e => {
    e.preventDefault();

    window.db.collection("todos").add({
      name: e.target.name.value,
      description: e.target.description.value
    });

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

    this.closeTaskForm();
  };

  editTask = e => {
    e.preventDefault();

    console.log(e.target);
  };

  // editTask = e => {
  //   e.preventDefault();

  //   const { tasks } = this.state;
  //   const copiesTasks = JSON.parse(JSON.stringify(tasks));

  //   copiesTasks.map(task => {
  //     if(task.id === this.state.editedDataTask.id) {
  //       task.name = e.target[0].value;
  //       task.description = e.target[1].value;
  //     };
  //   });

  //   this.setState({
  //     tasks: copiesTasks
  //   });

  //   this.closeTaskForm();
  // };

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
    const { isAddingNewTask, editableTask } = this.state;

    return (
      <main className='main_container'>
        <div className='added-tasks_container'>
          <div className='added-tasks_container__header'>
            <button className="add-new-task__button" onClick={this.showNewTaskForm}>Add Task</button>
            <span className='added-tasks__span'>Added tasks:</span>
          </div>
          {this.state.isOpenTaskForm && 
            <TaskForm
              closeTaskForm={this.closeTaskForm}
              addTask={this.addTask}
              isAddingNewTask={isAddingNewTask}
              editTask={this.editTask}
              editableTask={editableTask}
            />
          }
          <AddedTasks
            tasks={this.state.tasks}
            showEditableTaskForm={this.showEditableTaskForm}
            removeTask={this.removeTask}
          />
        </div>
      </main>
    );
  };
};
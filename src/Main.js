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

  showNewTaskForm = () => {
    this.setState({
      isOpenTaskForm: true,
      isAddingNewTask: true,
      editableTask: null
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
    e.persist();

    const { tasks } = this.state;
    const newTask = {};

    window.db.collection("todos").add({
      name: e.target.name.value,
      description: e.target.description.value
    })
    .then(document => {
      newTask.name = e.target.name.value;
      newTask.description = e.target.description.value;
      newTask.id = document.id;

      this.setState({ tasks: [...tasks, newTask] });
    })
    .catch(error => {
      alert('Error:');
      console.log(error);
    });

    this.closeTaskForm();
  };

  editTask = e => {
    e.preventDefault();
    e.persist();
    
    const { editableTask, tasks } = this.state;

    const copiesTasks = [...tasks];

    window.db.collection("todos").doc(editableTask.id).update({
      name: e.target.name.value,
      description: e.target.description.value
    })
    .then(() => {
      copiesTasks.forEach(task => {
        if(task.id === editableTask.id) {
          task.name = e.target.name.value;
          task.description = e.target.description.value;
        };
      });

      this.setState({ tasks: copiesTasks });
    });

    this.closeTaskForm();
  };

  //ok

  removeTask = e => {
    const removedTaskId = e.target.parentElement.parentElement.id;

    window.db.collection('todos').doc(removedTaskId).delete();

    this.updateState();
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
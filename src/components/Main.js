import React, { Component } from 'react';
import { connect } from 'react-redux';
import { db } from '../firebase/firebase';

import AddedTasks from './AddedTasks';
import TaskForm from './TaskForm';

import './Main.css';

class Main extends Component {
  state = {
    tasks: [],
    isOpenTaskForm: false,
    isAddingNewTask: false,
    editableTask: undefined,
    userUid: null
  };

  componentDidUpdate(prevProps) {
    if (this.props.userUid !== prevProps.userUid) {
      this.setState({userUid: this.props.userUid}, () => {
        const { userUid } = this.state;
        const tasks = [];
    
        if (userUid) {
          db.collection(userUid).get()
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
        } else {
          this.setState({ tasks });
        };
      });
    };
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
      isAddingNewTask: false,
      editableTask: undefined
    });
  };

  addTask = e => {
    e.preventDefault();
    e.persist();

    const { userUid } = this.state;
    const { tasks } = this.state;
    const newTask = {};

    db.collection(userUid).add({
      name: e.target.name.value,
      description: e.target.description.value
    })
    .then(document => {
      newTask.name = e.target.name.value;
      newTask.description = e.target.description.value;
      newTask.id = document.id;

      this.setState({ tasks: [...tasks, newTask] });
    })
    .catch((error)=> {
      console.error("Error adding document: ", error);
    });

    this.closeTaskForm();
  };

  editTask = e => {
    e.preventDefault();
    e.persist();
    
    const { userUid } = this.state;
    const { editableTask, tasks } = this.state;

    const copiesTasks = [...tasks];

    db.collection(userUid).doc(editableTask.id).update({
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

  removeTask = id => {
    const { userUid } = this.state;
    const { tasks } = this.state;

    db.collection(userUid).doc(id).delete()
    .then(() => {
      const filteredTasks = tasks.filter(task => task.id !== id);

      this.setState({
        tasks: filteredTasks
      });
    })
    .catch(error => {
      alert("Error");
      console.error("Error removing document: ", error);
    });
  };

  render() {
    const { isOpenTaskForm, isAddingNewTask, editableTask, tasks, userUid } = this.state;

    return (
      <main className='main_container'>
        {userUid ?
          <div className='added-tasks_container__header'>
            <button className="add-new-task__button" onClick={this.showNewTaskForm}>Add Task</button>
            <span className='added-tasks__span'>Added tasks:</span>
          </div> :
          null
        }
        <div className='added-tasks_container'>
          {isOpenTaskForm &&
            <TaskForm
              closeTaskForm={this.closeTaskForm}
              addTask={this.addTask}
              isAddingNewTask={isAddingNewTask}
              editTask={this.editTask}
              editableTask={editableTask}
            />
          }
          {tasks.length ?
            <AddedTasks
              tasks={tasks}
              showEditableTaskForm={this.showEditableTaskForm}
              removeTask={this.removeTask}
            /> : 
            null
          }
        </div>
      </main>
    );
  };
};

const mapStateToProps = state => {
  return {
    userUid: state.user.uid
  };
};

export const WrappedMain = connect(mapStateToProps)(Main);
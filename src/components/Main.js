import React, { Component } from 'react';
import { connect } from 'react-redux';
import { passShowNewTaskFormFunction } from '../actions/main';
import { db } from '../firebase/firebase';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import AddedTasks from './AddedTasks';
import TaskForm from './TaskForm';
import './Main.css';
import Preloader from './Preloader';

class Main extends Component {
  state = {
    tasks: [],
    isOpenTaskForm: false,
    isAddingNewTask: false,
    editableTask: undefined,
    userUid: null
  };

  componentDidMount() {
    const { passShowNewTaskFormFunction } = this.props;

    passShowNewTaskFormFunction(this.showNewTaskForm);
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

    const taskText = e.target.taskText.value;
    const { userUid } = this.state;
    const newTask = {};
    const { tasks } = this.state;
    

    if (taskText) {
      db.collection(userUid).add({
        taskText: taskText
      })
      .then(document => {
        newTask.taskText = taskText;
        newTask.id = document.id;
  
        this.setState({ tasks: [...tasks, newTask] });
  
        this.closeTaskForm();
      })
      .catch((error)=> {
        console.error("Error adding document: ", error);
      });
    } else {
      alert('Please fill in the empty fields');
    };
  };

  editTask = e => {
    e.preventDefault();
    e.persist();
    
    const taskText = e.target.taskText.value;
    const { userUid } = this.state;
    const { editableTask, tasks } = this.state;
    const copiesTasks = [...tasks];

    if (taskText) {
      db.collection(userUid).doc(editableTask.id).update({
        taskText: taskText
      })
      .then(() => {
        copiesTasks.forEach(task => {
          if(task.id === editableTask.id) {
            task.taskText = taskText;
          };
        });
  
        this.setState({ tasks: copiesTasks });
  
        this.closeTaskForm();
      });
    } else {
      alert('Please fill in the empty fields');
    };
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

  taskPriorityToggle = (id, isImportant) => {
    const { userUid } = this.state;
    const { tasks } = this.state;
    const copiesTasks = [...tasks];

    db.collection(userUid).doc(id).update({
      isImportant: !isImportant
    })
    .then(() => {
      copiesTasks.forEach(task => {
        if (task.id === id) {
          task.isImportant = !isImportant;
        };
      });

      this.setState({ tasks: copiesTasks });
    });
  };

  render() {
    const { isOpenTaskForm, isAddingNewTask, editableTask, tasks, userUid } = this.state;

    return (
      <main className='center main_container'>
        {userUid ?
          <div className="container">
            <TransitionGroup>
              {isOpenTaskForm &&
                <CSSTransition timeout={400} classNames='task-form_component'>
                  <TaskForm
                    closeTaskForm={this.closeTaskForm}
                    addTask={this.addTask}
                    isAddingNewTask={isAddingNewTask}
                    editTask={this.editTask}
                    editableTask={editableTask}
                  />
                </CSSTransition>
              }
            </TransitionGroup>
            {tasks.length ?
              <AddedTasks
                tasks={tasks}
                taskPriorityToggle={this.taskPriorityToggle}
                showEditableTaskForm={this.showEditableTaskForm}
                removeTask={this.removeTask}
              /> 
              : 
              <Preloader/>
            }
          </div>
          :
          <h2 className="logged-out_info__container">Sign in to view and add tasks</h2>
        }
      </main>
    );
  };
};

const mapStateToProps = state => ({
  userUid: state.user.uid
});
  
const mapDispatchToProps = dispatch => ({
  passShowNewTaskFormFunction: showNewTaskForm => dispatch(passShowNewTaskFormFunction(showNewTaskForm))
});

export const WrappedMain = connect(mapStateToProps, mapDispatchToProps)(Main);
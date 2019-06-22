import React, { Component } from 'react'
import './Main.css'
import NewTaskForm from './NewTaskForm';
import AddedTasks from './AddedTasks'

export default class Main extends Component {
  state = {
    isOpen: false,
    tasks: []
  }

  render() {
    const newTaskForm = this.state.isOpen && <NewTaskForm showNewTaskForm={this.showNewTaskForm} getData={this.getData}/>

    return (
      <main>
        <div className='added-tasks_container'>
          <div className='added-tasks_container__header'>
            <button className="add-new-task__button" onClick={!this.state.isOpen ? this.showNewTaskForm : undefined}>Add Task</button>
            <span className='added-tasks__span' onClick={this.clicked}>Added tasks:</span>
          </div>
          {newTaskForm}
          <AddedTasks tasks={this.state.tasks}/>
        </div>
      </main>
    )
  }

  showNewTaskForm = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  getData = (task) => {
    this.state.tasks.push(task)
  }

  clicked = () => {
    console.log(this.state)
  }

  editTask = (task) => {

  }
}
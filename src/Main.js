import React, { Component } from 'react'
import './Main.css'
import NewTaskForm from './NewTaskForm';

export default class Main extends Component {
  state = {
    isOpen: false
  }

  render() {
    const newTaskForm = this.state.isOpen && <NewTaskForm />

    return (
      <main>
        <div className='added-tasks_container'>
          <div className='added-tasks_container__header'>
            <button class="add-new-task__button" onClick={this.showNewTaskForm}>Add Task</button>
            <span className='added-tasks__span'>Added tasks:</span>
          </div>
          {newTaskForm}
        </div>
      </main>
    )
  }

  showNewTaskForm = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
import React, { Component } from 'react'
import './Main.css'
import NewTaskForm from './NewTaskForm';
import AddedTask from './AddedTask'

export default class Main extends Component {
  state = {
    isOpen: false
  }

  render() {
    const newTaskForm = this.state.isOpen && <NewTaskForm showNewTaskForm={this.showNewTaskForm} getData={this.getData}/>

    return (
      <main>
        <div className='added-tasks_container'>
          <div className='added-tasks_container__header'>
            <button className="add-new-task__button" onClick={!this.state.isOpen ? this.showNewTaskForm : undefined}>Add Task</button>
            <span className='added-tasks__span'>Added tasks:</span>
          </div>
          {newTaskForm}
          <AddedTask name={this.state.name} description={this.state.description}/>
        </div>
      </main>
    )
  }

  showNewTaskForm = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  getData = (name, description) => {
    this.setState({
      name: name,
      description: description
    })
  }
}
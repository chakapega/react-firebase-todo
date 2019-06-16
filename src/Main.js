import React from 'react'
import './Main.css'

export default function Main() {
  return (
    <main>
      <div className='added-tasks_container'>
        <div className='added-tasks_container__header'>
          <button class="add-new-task__button">Add Task</button>
          <span className='added-tasks__span'>Added tasks:</span>
        </div>
      </div>
    </main>
  )
}

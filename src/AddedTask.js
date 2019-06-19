import React, { Component } from 'react'
import './AddedTask.css'
import deletePng from './images/delete.png'
import editPng from './images/edit.png'

export default class AddedTask extends Component {
  render() {
    return (
      <div className="added-task_container" data-id="cla6Jh5SL2GKsb3anUMD">
        <span className="added-task_span">Name: {this.props.name} | Description: {this.props.description} </span>
        <div className="image-container">
          <img className="img-edit" title="Edit" src={editPng} alt="edit"/>
          <img className="img-delete" title="Remove" src={deletePng} alt="delete"/>
        </div>
      </div>
    )
  }
}

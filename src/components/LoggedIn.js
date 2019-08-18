import React, { Fragment } from 'react';

export default function LoggedIn({ logOut, viewAccountDetails, showNewTaskForm }) {
  return (
    <Fragment>
      <button type='button' className="waves-effect waves-light btn" title='Click to log out' onClick={logOut}>Logout</button>
      <button type='button' className="waves-effect waves-light btn" title='Click to view account details' onClick={viewAccountDetails}>Account</button>
      <button type='button' className="waves-effect waves-light btn" title='Click to add new task' onClick={showNewTaskForm}>Add task</button>
    </Fragment>
  );
};
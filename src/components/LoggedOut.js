import React, { Fragment } from 'react';

export default function LoggedOut({ showSignInAuthForm, showSignUpAuthForm }) {
  return (
    <Fragment>
      <button type='button' title='Login using email and password' className="waves-effect waves-light btn" onClick={showSignInAuthForm}>Sign in</button>
      <button type='button' title='Register using email and password' className="waves-effect waves-light btn" onClick={showSignUpAuthForm}>Sign up</button>
    </Fragment>
  );
};
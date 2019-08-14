import React, { Fragment } from 'react';

export default function LoggedOut({ showSignInAuthForm, showSignUpAuthForm }) {
  return (
    <Fragment>
      <button style={{margin: 10 + 'px'}} type='button' className="waves-effect waves-light btn" onClick={showSignInAuthForm}>Sign in</button>
      <button style={{margin: 10 + 'px'}} type='button' className="waves-effect waves-light btn" onClick={showSignUpAuthForm}>Sign up</button>
    </Fragment>
  );
};
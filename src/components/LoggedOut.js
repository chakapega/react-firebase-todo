import React, { Fragment } from 'react';

// import './LoggedOut.css';

export default function LoggedOut({ showSignInAuthForm, showSignUpAuthForm }) {
  return (
    <Fragment>
      <li><a className="waves-effect waves-light btn" onClick={showSignInAuthForm}>Sign in</a></li>
      <li><a className="waves-effect waves-light btn" onClick={showSignUpAuthForm}>Sign up</a></li>
    </Fragment>
  );
};



{/* <button type='button' className='sign-in_btn' onClick={showSignInAuthForm}>Sign in</button>
<button type='button' className='sign-up_btn' onClick={showSignUpAuthForm}>Sign up</button> */}

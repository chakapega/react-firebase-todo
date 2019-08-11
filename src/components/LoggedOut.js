import React from 'react';

import './LoggedOut.css';

export default function LoggedOut({ showSignInAuthForm, showSignUpAuthForm }) {
  return (
    <div className="logged-out_container">
      <button type='button' className='sign-in_btn' onClick={showSignInAuthForm}>Sign in</button>
      <button type='button' className='sign-up_btn' onClick={showSignUpAuthForm}>Sign up</button>
    </div>
  );
};

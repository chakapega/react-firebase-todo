import React from 'react';

export default function LoggedOut({ showAuthForm }) {
  return (
    <div className="logged-out_container">
      <button type='button' className='sign-in_btn' onClick={showAuthForm} >Login</button>
      <button type='button' className='sign-up_btn'>Sign up</button>
    </div>
  );
};

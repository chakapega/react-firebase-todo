import React from 'react';

export default function AuthForm({ closeAuthForm, logIn }) {
  return (
    <form className='auth_form' onSubmit={logIn} >
      <label className='label_email' htmlFor='input_email'>Email</label>
      <input type='email' name='email' id='input_email'></input>
      <label className='label_password' htmlFor='input_password'>Password</label>
      <input type='password' name='password' id='input_password'></input>
      <button className='button-submit__auth_form' type='submit'>Login</button>
      <button className='button-cancel__auth_form' type='button' onClick={closeAuthForm} >Cancel</button>
    </form>
  );
};
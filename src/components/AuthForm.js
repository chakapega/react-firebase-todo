import React from 'react';

import './AuthForm.css';

export default function AuthForm({ closeAuthForm, signIn, signUp, isAccountCreation }) {
  const handleSubmit = isAccountCreation ? signUp : signIn;

  return (
    <div className='modal_container'>
      <form className='auth_form' onSubmit={handleSubmit}>
        <label className='auth_form__label_email' htmlFor='auth_form__input_email'>Email</label>
        <input type='email' name='email' id='auth_form__input_email'></input>
        <label className='auth_form__label_password' htmlFor='auth_form__input_password'>Password</label>
        <input type='password' name='password' id='auth_form__input_password'></input>
        <div className='auth_form__btns'>
          <button className='auth_form__button_submit' type='submit'>
            {
              isAccountCreation? 'Sign up' : 'Sign in'
            }
          </button>
          <button className='auth_form__button_cancel' type='button' onClick={closeAuthForm}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
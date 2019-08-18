import React from 'react';
import ReactDOM from 'react-dom';

export default function AuthForm({ closeAuthForm, signIn, signUp, isAccountCreation }) {
  const handleSubmit = isAccountCreation ? signUp : signIn;

  const divModal = document.getElementById('modal');

  return (
    ReactDOM.createPortal(
      <div className="modal_container">
        <div className='row'>
          <form className="white col s12" onSubmit={handleSubmit}>
            <div className="input-field col s12">
              <input autoFocus id="input_email" type="email" name='email' className="validate"></input>
              <label htmlFor="input_email">Email</label>
            </div>
            <div className="input-field col s12">
              <input id="input_password" type="password" name='password' className="validate"></input>
              <label htmlFor="input_password">Password</label>
            </div>
            <div className="center">
              <button className='waves-effect waves-light btn' type='submit'>
                {
                  isAccountCreation ? 'Sign up' : 'Sign in'
                }
              </button>
              <button className='waves-effect waves-light btn' type='button' onClick={closeAuthForm}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
      ,
      divModal
    )
  );
};
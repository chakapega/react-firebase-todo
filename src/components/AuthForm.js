import React from 'react';

// import './AuthForm.css';

export default function AuthForm({ closeAuthForm, signIn, signUp, isAccountCreation }) {
  const handleSubmit = isAccountCreation ? signUp : signIn;

  const modalContainerStyle = {
    width: 100 + '%',
    height: 100 + 'vh',
    position: 'absolute',
    background: '#00000023',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={modalContainerStyle} className="modal_container">
      <div className='row'>
        <form style={{height: 220 + 'px'}} className="white col s12" onSubmit={handleSubmit}>
          <div className="input-field col s12">
            <input id="input_email" type="email" name='email' className="validate"></input>
            <label htmlFor="input_email">Email</label>
          </div>
          <div className="input-field col s12">
            <input id="input_password" type="password" name='password' className="validate"></input>
            <label htmlFor="input_password">Password</label>
          </div>
          <div className="center">
            <button style={{margin: 5 + 'px'}} className='waves-effect waves-light btn' type='submit'>
              {
                isAccountCreation? 'Sign up' : 'Sign in'
              }
            </button>
            <button style={{margin: 5 + 'px'}} className='waves-effect waves-light btn' type='button' onClick={closeAuthForm}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};



{/* <div className='modal_container'>
<form className='auth_form' onSubmit={handleSubmit}>
  {isAccountCreation ? <span className='auth_form__span'>Create your account</span> : null}
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
</div> */}
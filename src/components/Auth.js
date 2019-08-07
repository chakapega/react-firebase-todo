import React, { Component } from 'react';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';
import AuthForm from './AuthForm';
import { auth } from '../firebase/firebase';

export default class Auth extends Component {
  state = {
    authorizationDone: false,
    isOpenAuthForm: false,
    email: '',
    password: ''
  };

  showAuthForm = () => {
    this.setState({
      isOpenAuthForm: true
    });
  };

  closeAuthForm = () => {
    this.setState({
      isOpenAuthForm: false
    });
  };

  logIn = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
  
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      console.log(cred);
      this.setState({ authorizationDone: true });
      this.closeAuthForm();
    });
  };

  logOut = () => {
    auth.signOut().then(() => {
      this.setState({ authorizationDone: false });
    });
  };

  render() {
    const { authorizationDone, isOpenAuthForm } = this.state;

    return (
      <div className='auth_container'>
        {!authorizationDone && <LoggedOut showAuthForm={this.showAuthForm} />}
        {authorizationDone && <LoggedIn logOut={this.logOut} />}
        {isOpenAuthForm && <AuthForm closeAuthForm={this.closeAuthForm} logIn={this.logIn} />}
      </div>
    );
  };
};
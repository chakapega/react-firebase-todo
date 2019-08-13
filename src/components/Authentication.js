import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { auth } from '../firebase/firebase';
import { connect } from 'react-redux';
import { changeUserUid } from '../actions/user';

import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';
import AuthForm from './AuthForm';

class Authentication extends Component {
  state = {
    isOpenAuthForm: false,
    isAuthorized: false,
    isAccountCreation: false
  };

  componentDidMount() {
    const { changeUserUid } = this.props;

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ isAuthorized: true });
        changeUserUid(user.uid);
      } else {
        this.setState({ isAuthorized: false });
        changeUserUid('');
      };
    });
  };

  showSignInAuthForm = () => {
    this.setState({
      isOpenAuthForm: true,
    });
  };

  showSignUpAuthForm = () => {
    this.setState({
      isOpenAuthForm: true,
      isAccountCreation: true
    });
  };

  closeAuthForm = () => {
    this.setState({
      isOpenAuthForm: false,
      isAccountCreation: false
    });
  };

  signIn = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ isAuthorized: true });
        this.closeAuthForm();
      })
      .catch(error => {
        alert(error.message);
      });
  };

  signUp = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.closeAuthForm();
        alert('Account successfully created and you are logged in');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  logOut = () => {
    auth.signOut().then(() => {
      this.setState({ isAuthorized: false });
    });
  };

  render() {
    const { isAuthorized, isOpenAuthForm, isAccountCreation } = this.state;
    const divModal = document.getElementById('modal');

    return (
      <ul className="right hide-on-med-and-down">
        {!isAuthorized && <LoggedOut showSignUpAuthForm={this.showSignUpAuthForm} showSignInAuthForm={this.showSignInAuthForm} />}
        {isAuthorized && <LoggedIn logOut={this.logOut} />}
        {isOpenAuthForm &&
          ReactDOM.createPortal(
            <AuthForm isAccountCreation={isAccountCreation} closeAuthForm={this.closeAuthForm} signUp={this.signUp} signIn={this.signIn} />,
            divModal,
          )}
      </ul>
    );
  };
};

const mapStateToProps = state => ({
  isOpenAuthForm: state.isOpenAuthForm,
  isAuthorized: state.isAuthorized,
  userUid: state.userUid,
});

const mapDispatchToProps = dispatch => ({
  changeUserUid: userUid => dispatch(changeUserUid(userUid))
});

export const WrappedAuthentication = connect(mapStateToProps,mapDispatchToProps)(Authentication);
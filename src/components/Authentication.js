import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { auth } from '../firebase/firebase';
import { connect } from 'react-redux';
import { changeUserUid } from '../actions/user';

import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';
import AuthForm from './AuthForm';
import AccountDetails from './AccountDetails';

class Authentication extends Component {
  state = {
    isOpenAuthForm: false,
    isAuthorized: false,
    isAccountCreation: false,
    email: '',
    isOpenAccountDetails: false
  };

  componentDidMount() {
    const { changeUserUid } = this.props;

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ isAuthorized: true, email: user.email });
        changeUserUid(user.uid);
      } else {
        this.setState({ isAuthorized: false, email: '' });
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

  viewAccountDetails = () => {
    this.setState({ isOpenAccountDetails: true });
  };

  closeAccountDetails = () => {
    this.setState({ isOpenAccountDetails: false });
  };

  render() {
    const { isAuthorized, isOpenAuthForm, isAccountCreation, isOpenAccountDetails, email } = this.state;
    const divModal = document.getElementById('modal');

    return (
      <div className="buttons_container right">
        {!isAuthorized && <LoggedOut showSignUpAuthForm={this.showSignUpAuthForm} showSignInAuthForm={this.showSignInAuthForm} />}
        {isAuthorized && <LoggedIn closeAccountDetails={this.closeAccountDetails} viewAccountDetails={this.viewAccountDetails} logOut={this.logOut} />}
        {isOpenAuthForm &&
          ReactDOM.createPortal(
            <AuthForm isAccountCreation={isAccountCreation} closeAuthForm={this.closeAuthForm} signUp={this.signUp} signIn={this.signIn} />,
            divModal,
          )
        }
        {isOpenAccountDetails &&
          ReactDOM.createPortal(
            <AccountDetails closeAccountDetails={this.closeAccountDetails} email={email} />, divModal
          )
        }
      </div>
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
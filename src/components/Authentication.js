import React, { Component } from 'react';
import { auth } from '../firebase/firebase';
import { connect } from 'react-redux';
import { changeUserUid } from '../actions/user';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';
import AuthForm from './AuthForm';
import AccountDetails from './AccountDetails';
import './Authentication.css';

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
        window.M.toast({html: error.message, displayLength: 9000});
      });
  };

  signUp = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.closeAuthForm();
        window.M.toast({html: 'Account successfully created and you are logged in', displayLength: 5000});
      })
      .catch((error) => {
        window.M.toast({html: error.message, displayLength: 9000});
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

  menuToggle = () => {
    const buttonsContainer = document.querySelector('.buttons-container');

    if (buttonsContainer.style.display === '') {
      buttonsContainer.style.display = 'flex';
    } else if (buttonsContainer.style.display === 'flex') {
      buttonsContainer.style.display = '';
    };
  };

  closeMenu = () => {
    const buttonsContainer = document.querySelector('.buttons-container');
    
    buttonsContainer.style.display = '';
  };

  render() {
    const { isAuthorized, isOpenAuthForm, isAccountCreation, isOpenAccountDetails, email } = this.state;
    const { showNewTaskForm } = this.props;

    return (
      <div className="right">
        <div className='menu-button'>
          <i className="material-icons icon-menu" onClick={this.menuToggle}>menu</i>
        </div>
        <div className='buttons-container' onClick={this.closeMenu}>
          {!isAuthorized && <LoggedOut showSignUpAuthForm={this.showSignUpAuthForm} showSignInAuthForm={this.showSignInAuthForm}/>}
          {isAuthorized && <LoggedIn showNewTaskForm={showNewTaskForm} closeAccountDetails={this.closeAccountDetails} viewAccountDetails={this.viewAccountDetails} logOut={this.logOut}/>}
        </div>
        <TransitionGroup>
          {isOpenAuthForm &&
            <CSSTransition timeout={400} classNames='auth-form_component'>
              <AuthForm isAccountCreation={isAccountCreation} closeAuthForm={this.closeAuthForm} signUp={this.signUp} signIn={this.signIn}/>
            </CSSTransition>
          }
          {isOpenAccountDetails &&
            <CSSTransition timeout={400} classNames='account-details_component'>
              <AccountDetails closeAccountDetails={this.closeAccountDetails} email={email}/>
            </CSSTransition>
          }
        </TransitionGroup>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  isOpenAuthForm: state.isOpenAuthForm,
  isAuthorized: state.isAuthorized,
  userUid: state.userUid,
  showNewTaskForm: state.showNewTaskForm.showNewTaskForm
});

const mapDispatchToProps = dispatch => ({
  changeUserUid: userUid => dispatch(changeUserUid(userUid))
});

export const WrappedAuthentication = connect(mapStateToProps,mapDispatchToProps)(Authentication);
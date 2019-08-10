import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';
import AuthForm from './AuthForm';
import { auth } from '../firebase/firebase';
import { connect } from 'react-redux';
import { changeUserUid } from '../actions/user';

class Authentication extends Component {
  state = {
    isOpenAuthForm: this.props.isOpenAuthForm,
    isAuthorized: this.props.isAuthorized,
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
      }
    });
  }

  showAuthForm = () => {
    this.setState({
      isOpenAuthForm: true,
    });
  };

  closeAuthForm = () => {
    this.setState({
      isOpenAuthForm: false,
    });
  };

  logIn = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    auth.signInWithEmailAndPassword(email, password).then(() => {
      this.setState({ isAuthorized: true });
      this.closeAuthForm();
    });
  };

  logOut = () => {
    auth.signOut().then(() => {
      this.setState({ isAuthorized: false });
    });
  };

  render() {
    const { isAuthorized, isOpenAuthForm } = this.state;

    const divModal = document.getElementById('modal');

    return (
      <div className="auth_container">
        {!isAuthorized && <LoggedOut showAuthForm={this.showAuthForm} />}
        {isAuthorized && <LoggedIn logOut={this.logOut} />}
        {isOpenAuthForm &&
          ReactDOM.createPortal(
            <AuthForm closeAuthForm={this.closeAuthForm} logIn={this.logIn} />,
            divModal,
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOpenAuthForm: state.isOpenAuthForm,
  isAuthorized: state.isAuthorized,
  userUid: state.userUid,
});

const mapDispatchToProps = dispatch => ({
  changeUserUid: userUid => dispatch(changeUserUid(userUid)),
});

export const WrappedAuthentication = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Authentication);

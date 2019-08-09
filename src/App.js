import React, { Fragment } from 'react';
import { WrappedMain } from './components/Main';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from './components/Authentication';

export default function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <WrappedMain />
      </Fragment>
    </Provider>
  );
};
import React from 'react';
import { WrappedMain } from './components/Main';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './config/store';

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <WrappedMain />
    </Provider>
  );
};

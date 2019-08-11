import React from 'react';
import { WrappedAuthentication } from './Authentication';

import './Header.css';

export default function Header() {
  return (
    <header className='header_container'>
      <span className='logo'>To-do list</span>
      <WrappedAuthentication />
    </header>
  );
};
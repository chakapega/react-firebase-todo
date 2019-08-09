import React from 'react';
import './Header.css';
import { WrappedAuthentication } from './Authentication';

export default function Header() {
  return (
    <header className='header_container'>
      <span className='logo'>To-do list</span>
      <WrappedAuthentication />
    </header>
  );
};
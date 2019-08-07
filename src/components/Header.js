import React from 'react';
import './Header.css';
import Auth from './Auth';

export default function Header() {
  return (
    <header className='header_container'>
      <span className='logo'>To-do list</span>
      <Auth />
    </header>
  );
};
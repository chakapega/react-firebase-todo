import React from 'react';
import { WrappedAuthentication } from './Authentication';

// import './Header.css';

export default function Header() {
  return (
    <nav className="nav">
      <div className="container nav-wrapper">
        <a href="#!" className="brand-logo">To Do List</a>
        <WrappedAuthentication />
      </div>
    </nav>
  );
};



{/* <header className='header_container'>
<span className='logo'>To-do list</span>
<WrappedAuthentication />
</header> */}
import React from 'react';
import { WrappedAuthentication } from './Authentication';

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
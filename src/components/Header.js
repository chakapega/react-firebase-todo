import React from 'react';
import { WrappedAuthentication } from './Authentication';

export default function Header() {
  return (
    <nav className="nav">
      <div className="container nav-wrapper">
        <span className="brand-logo left">To Do List</span>
        <WrappedAuthentication />
      </div>
    </nav>
  );
};
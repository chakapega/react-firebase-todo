import React from 'react';

import './LoggedIn.css';

export default function LoggedIn({ logOut }) {
  return (
    <div className='logged-in_container'>
      <button type='button' className='logout_btn' onClick={logOut} >Logout</button>
    </div>
  );
};
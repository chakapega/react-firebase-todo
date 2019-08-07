import React from 'react'

export default function LoggedIn({ logOut }) {
  return (
    <div className='logged-in_container'>
      <button type='button' className='Logout_btn' onClick={logOut} >Logout</button>
    </div>
  );
};
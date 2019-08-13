import React, { Fragment } from 'react';

// import './LoggedIn.css';

export default function LoggedIn({ logOut }) {
  return (
    <Fragment>
      <li><a className="waves-effect waves-light btn" onClick={logOut}>Logout</a></li>
    </Fragment>
  );
};


{/* <button type='button' className='logout_btn' onClick={logOut} >Logout</button> */}
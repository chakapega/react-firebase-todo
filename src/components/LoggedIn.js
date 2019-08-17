import React, { Fragment } from 'react';

export default function LoggedIn({ logOut, viewAccountDetails }) {
  return (
    <Fragment>
      <button style={{margin: 10 + 'px'}} type='button' className="waves-effect waves-light btn" title='Click to log out' onClick={logOut}>Logout</button>
      <button style={{margin: 10 + 'px'}} type='button' className="waves-effect waves-light btn" title='Click to view account details' onClick={viewAccountDetails} >Account</button>
    </Fragment>
  );
};
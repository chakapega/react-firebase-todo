import React, { Fragment } from 'react';

export default function LoggedIn({ logOut }) {
  return (
    <Fragment>
      <button type='button' className="waves-effect waves-light btn" onClick={logOut}>Logout</button>
    </Fragment>
  );
};
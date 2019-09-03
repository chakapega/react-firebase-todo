import React from 'react';
import ReactDOM from 'react-dom';

import './AccountDetails.css';

const AccountDetails = ({ email, closeAccountDetails }) => {
  const divModal = document.getElementById('modal');

  return (
    ReactDOM.createPortal(
      <div className="modal_container">
        <div className='row'>
          <div className="account-details_container">
            <h4>{email}</h4>
            <button className='waves-effect waves-light btn' type='button' onClick={closeAccountDetails}>Close</button>
          </div>
        </div>
      </div>
      ,
      divModal
    )
  );
};

export default AccountDetails;
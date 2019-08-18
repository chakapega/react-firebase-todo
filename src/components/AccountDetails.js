import React from 'react';
import ReactDOM from 'react-dom';

const AccountDetails = ({ email, closeAccountDetails }) => {
  const divModal = document.getElementById('modal');

  return (
    ReactDOM.createPortal(
      <div className="modal_container">
        <div className='row'>
          <div className="white account-details_container col s12 center">
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
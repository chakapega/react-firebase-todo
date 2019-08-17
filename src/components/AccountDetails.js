import React from 'react';

const AccountDetails = ({ email, closeAccountDetails }) => {
  const modalContainerStyle = {
    width: 100 + '%',
    height: 100 + 'vh',
    position: 'absolute',
    background: '#00000030',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={modalContainerStyle} className="modal_container">
      <div className="white account-details_container">
        <h4>{email}</h4>
        <button className='waves-effect waves-light btn' type='button' onClick={closeAccountDetails}>Close</button>
      </div>
    </div>
  );
};

export default AccountDetails;
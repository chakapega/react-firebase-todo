import React from 'react';
import ReactDOM from 'react-dom';

const Preloader = () => {
  const divModal = document.getElementById('modal');

  return (
    ReactDOM.createPortal(
      <div className='preloader_container'>
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
      ,
      divModal
    )
  );
};

export default Preloader;

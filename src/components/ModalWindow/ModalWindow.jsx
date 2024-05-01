import React from 'react';

import './modalwindow.css';

export const ModalWindow = ({onClose, children}) => {
  return (
    <div className="modal">
      <div className="modal__container" onClick={() => console.log('first')}>
        <div className="modal__content">
          <button className="modal__close-button" onClick={() => onClose()}></button>
          {children}
        </div>
      </div>
    </div>
  );
};

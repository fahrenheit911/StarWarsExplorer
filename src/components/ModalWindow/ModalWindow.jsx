import React from 'react';

import './modalwindow.css';

export const ModalWindow = ({onClose, name}) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__content">
          <button className="modal__close-button" onClick={() => onClose()}></button>
          {name}
        </div>
      </div>
    </div>
  );
};

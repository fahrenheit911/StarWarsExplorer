import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Loader from '../Loader';

export const ModalWindow = ({loading, children, onWrapperClick}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.match(/^\/([^\\/]+)/)[0];

  return (
    <div className="modal">
      <div className="modal__wrapper" onClick={e => onWrapperClick(e, () => navigate(pathname))}>
        <div className="modal__content">{loading ? <Loader /> : children}</div>
      </div>
    </div>
  );
};

import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Loader from '../Loader';

import '../../styles/modalWindow.css';

export const ModalWindow = ({loading, children, onWrapperClick}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathnameMatch = location.pathname.match(/^\/([^\\/]+)/);
  const pathname = pathnameMatch ? pathnameMatch[0] : '/';

  return (
    <div className="modal">
      <div
        className="modal__wrapper"
        data-testid="modal-wrapper"
        onClick={e => onWrapperClick(e, () => navigate(pathname))}
      >
        <div className="modal__content">{loading ? <Loader /> : children}</div>
      </div>
    </div>
  );
};

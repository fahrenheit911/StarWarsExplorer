import React from 'react';
import {useNavigate} from 'react-router-dom';
import PersonModalWindow from '../ModalWindow/PersonModalWindow';
import PlanetModalWindow from '../ModalWindow/PlanetModalWindow';

export const ModalWindow = ({personUrlId, planetUrlId}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        {personUrlId && !planetUrlId && <PersonModalWindow onClose={() => navigate('/people')} />}

        {planetUrlId && !personUrlId && <PlanetModalWindow onClose={() => navigate('/planets')} />}
      </div>
    </div>
  );
};

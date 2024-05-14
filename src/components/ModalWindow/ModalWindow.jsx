import React from 'react';
import {PersonModalWindow} from './PersonModalWindow';
import {PlanetModalWindow} from './PlanetModalWindow';
import {useNavigate} from 'react-router-dom';

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

import React from 'react';
import {useNavigate} from 'react-router-dom';
import PersonModalWindow from '../ModalWindow/PersonModalWindow';
import PlanetModalWindow from '../ModalWindow/PlanetModalWindow';
import StarshipModalWindow from '../ModalWindow/StarshipModalWindow';

export const ModalWindow = ({personUrlId, planetUrlId, starshipUrlId}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        {personUrlId && <PersonModalWindow onClose={() => navigate('/people')} />}
        {planetUrlId && <PlanetModalWindow onClose={() => navigate('/planets')} />}
        {starshipUrlId && <StarshipModalWindow onClose={() => navigate('/starships')} />}
      </div>
    </div>
  );
};

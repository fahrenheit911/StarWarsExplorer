import React from 'react';
import {PersonModalWindow} from './PersonModalWindow';
import {useNavigate} from 'react-router-dom';

export const ModalWindow = personUrlId => {
  const navigate = useNavigate();
  return <div>{personUrlId && <PersonModalWindow onClose={() => navigate('/')} />}</div>;
};

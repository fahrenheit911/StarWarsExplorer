import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {People} from '../pages/People';
import {Planets} from '../pages/Planets';
import {Starships} from '../pages/Starships';
import ModalWindow from '../components/ModalWindow';

export const PagesRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/people" />} />
      <Route path="/people" element={<People />}>
        <Route path=":urlid" element={<ModalWindow />} />
      </Route>
      <Route path="/planets" element={<Planets />} />
      <Route path="/starships" element={<Starships />} />
    </Routes>
  );
};

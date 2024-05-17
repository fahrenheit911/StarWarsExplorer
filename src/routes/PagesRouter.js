import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {People} from '../pages/People';
import {Planets} from '../pages/Planets';
import {Starships} from '../pages/Starships';

export const PagesRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/people" />} />
      <Route path="/people" element={<People />}>
        <Route path=":perid" element={<People />} />
      </Route>
      <Route path="/planets" element={<Planets />}>
        <Route path=":plid" element={<Planets />} />
      </Route>
      <Route path="/starships" element={<Starships />}>
        <Route path=":stid" element={<Starships />} />
      </Route>
    </Routes>
  );
};

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {People} from '../pages/People';
import {Planets} from '../pages/Planets';
import {Starships} from '../pages/Starships';

export const PagesRouter = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/starships" element={<Starships />} />
      </Routes>
    </main>
  );
};

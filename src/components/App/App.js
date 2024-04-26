import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from '../Header';
import {PagesRouter} from '../../routes/PagesRouter';

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <PagesRouter />
      </main>
    </BrowserRouter>
  );
};

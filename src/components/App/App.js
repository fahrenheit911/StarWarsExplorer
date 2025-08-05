import React from 'react';
import {HashRouter, BrowserRouter} from 'react-router-dom';
import Header from '../Header';
import {PagesRouter} from '../../routes/PagesRouter';

export const App = () => {
  return (
    <HashRouter>
      <BrowserRouter basename="/StarWarsExplorer">
        <main>
          <Header />
          <PagesRouter />
        </main>
      </BrowserRouter>
    </HashRouter>
  );
};

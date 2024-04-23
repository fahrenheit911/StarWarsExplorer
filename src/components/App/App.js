import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import { PagesRouter } from '..//../routes/PagesRouter';

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <PagesRouter />
        <Button />
      </>
    </BrowserRouter>
  );
};

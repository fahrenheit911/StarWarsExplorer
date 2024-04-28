import React from 'react';
import Planet from '../components/Planet';
import Button from '../components/Button';

export const Planets = () => {
  const loadMore = () => {
    console.log('Planets button clicked!');
  };
  return (
    <>
      <section>
        <Planet />
      </section>
      <Button title="Load more" onClick={loadMore} />
    </>
  );
};

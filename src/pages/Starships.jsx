import React from 'react';
import Starship from '../components/Starship';
import Button from '../components/Button';

export const Starships = () => {
  const loadMore = () => {
    console.log('Starships button clicked!');
  };
  return (
    <>
      <section>
        <Starship />
      </section>
      <Button title="Load more" onClick={loadMore} />
    </>
  );
};

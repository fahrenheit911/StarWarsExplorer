import React from 'react';
import Starship from '../components/Starship';
import Button from '../components/Button';

export const Starships = () => {
  const handleClick = () => {
    console.log('Starships button clicked!');
  };
  return (
    <section>
      <Starship /> <Button title="Load more" onClick={handleClick} />
    </section>
  );
};

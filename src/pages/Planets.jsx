import React from 'react';
import Planet from '../components/Planet';
import Button from '../components/Button';

export const Planets = () => {
  const handleClick = () => {
    console.log('Planets button clicked!');
  };
  return (
    <section>
      <Planet />
      <Button title="Load more" onClick={handleClick} />
    </section>
  );
};

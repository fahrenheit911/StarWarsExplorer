import React from 'react';
import './button.css';

export const Button = () => {
  return (
    <button className="button" aria-label="Load more" onClick={() => console.log('first')}>
      Load more
    </button>
  );
};

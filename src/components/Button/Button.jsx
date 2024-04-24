import React from 'react';
import './button.css';

export const Button = ({onClick, title}) => {
  return (
    <button className="button" aria-label="Load more" onClick={onClick}>
      {title}
    </button>
  );
};

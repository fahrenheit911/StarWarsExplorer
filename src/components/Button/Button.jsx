import React from 'react';
import './button.css';

export const Button = ({onClick, title}) => {
  return (
    <button className="button" aria-label={title} onClick={onClick}>
      {title}
    </button>
  );
};

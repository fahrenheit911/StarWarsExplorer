import React from 'react';
import './button.css';

export const Button = ({onClick, title, disabled}) => {
  return (
    <button className="button" aria-label={title} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

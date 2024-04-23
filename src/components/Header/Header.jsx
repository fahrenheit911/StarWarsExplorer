import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

export const Header = () => {
  return (
    <nav>
      <ul className="header">
        <li>
          <NavLink to="/people">People</NavLink>
        </li>
        <li>
          <NavLink to="/planets">Planets</NavLink>
        </li>
        <li>
          <NavLink to="/starships">Starships</NavLink>
        </li>
      </ul>
    </nav>
  );
};

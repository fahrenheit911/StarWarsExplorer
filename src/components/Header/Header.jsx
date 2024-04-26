import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

export const Header = () => {
  return (
    <header className="header">
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list-item">
            <NavLink className="menu__link" to="/people">
              People
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink className="menu__link" to="/planets">
              Planets
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink className="menu__link" to="/starships">
              Starships
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

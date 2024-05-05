import React from 'react';
import {NavLink} from 'react-router-dom';

import './header.css';

export const Header = () => {
  const getClassName = obj => {
    let className = 'menu__link';
    if (obj.isActive) className += '__active';
    return className;
  };

  return (
    <header className="header">
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list-item">
            <NavLink className={getClassName} to="/people">
              People
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink className={getClassName} to="/planets">
              Planets
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink className={getClassName} to="/starships">
              Starships
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

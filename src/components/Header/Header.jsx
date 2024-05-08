import React from 'react';
import classNames from 'classnames';
import {NavLink, useLocation} from 'react-router-dom';

import './header.css';

export const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list-item">
            <NavLink
              className={classNames('menu__link', {
                menu__link__active: location.pathname === '/people',
              })}
              to="/people"
            >
              People
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              className={classNames('menu__link', {
                menu__link__active: location.pathname === '/planets',
              })}
              to="/planets"
            >
              Planets
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              className={classNames('menu__link', {
                menu__link__active: location.pathname === '/starships',
              })}
              to="/starships"
            >
              Starships
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

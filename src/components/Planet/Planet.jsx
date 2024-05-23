import React from 'react';
import {NavLink} from 'react-router-dom';
import {createInitials} from '../../Utils/createInitials';

import '../../styles/item.css';

export const Planet = ({name, population, url}) => {
  const initials = createInitials(name);

  const planetId = url.match(/\/(\d+)/)[1];
  return (
    <section className="items__container">
      <NavLink className="item__link" to={'/planets/' + planetId}>
        <div className="item__card">
          <div className="item__circle">
            <div className="item__initials">{initials}</div>
          </div>
          <div className="item__data">
            <div>Name: {name}</div>
            <div>Population: {population}</div>
          </div>
        </div>
      </NavLink>
    </section>
  );
};

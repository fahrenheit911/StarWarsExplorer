import React from 'react';
import {NavLink} from 'react-router-dom';
import {getInitials} from '../../Utils/getInitials';

import '../Person/person.css';

export const Planet = ({name, population, url}) => {
  const initials = getInitials(name);

  const planetId = url.match(/\/(\d+)/)[1];
  return (
    <section className="person">
      <NavLink className="person__link" to={'/planets/' + planetId}>
        <div className="person__card">
          <div className="person__circle">
            <div className="person__initials">{initials}</div>
          </div>
          <div className="person__data">
            <div>Name: {name}</div>
            <div>Population: {population}</div>
          </div>
        </div>
      </NavLink>
    </section>
  );
};

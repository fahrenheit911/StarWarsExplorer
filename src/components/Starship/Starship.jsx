import React from 'react';
import {NavLink} from 'react-router-dom';
import {createInitials} from '../../Utils/createInitials';

import '../Person/person.css';

export const Starship = ({name, cost_in_credits: cost, passengers, url}) => {
  const initials = createInitials(name);

  const starshipId = url.match(/\/(\d+)/)[1];
  return (
    <section className="person">
      <NavLink className="person__link" to={'/starships/' + starshipId}>
        <div className="person__card">
          <div className="person__circle">
            <div className="person__initials">{initials}</div>
          </div>
          <div className="person__data">
            <div>Name: {name}</div>
            <div>Cost: {cost}</div>
            <div>Passangers: {passengers}</div>
          </div>
        </div>
      </NavLink>
    </section>
  );
};

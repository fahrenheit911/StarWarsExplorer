import React from 'react';
import {NavLink} from 'react-router-dom';
import {createInitials} from '../../Utils/createInitials';

import '../../styles/item.css';

export const Starship = ({name, cost_in_credits: cost, passengers, url}) => {
  const initials = createInitials(name);

  const starshipId = url && url.match(/\/(\d+)/)[1];
  return (
    <section className="items__container" data-testid="cardid">
      <NavLink className="item__link" to={'/starships/' + starshipId}>
        <div className="item__card">
          <div className="item__circle">
            <div className="item__initials">{initials}</div>
          </div>
          <div className="item__data">
            <div>Name: {name}</div>
            <div>Cost: {cost}</div>
            <div>Passangers: {passengers}</div>
          </div>
        </div>
      </NavLink>
    </section>
  );
};

import React from 'react';
import {NavLink} from 'react-router-dom';
import {createInitials} from '../../Utils/createInitials';

import '../../styles/item.css';

export const Person = ({name, birth_year, gender, url}) => {
  const initials = createInitials(name);

  const personId = url.match(/\/(\d+)/)[1];

  return (
    <section className="items__container">
      <NavLink className="item__link" to={'/people/' + personId}>
        <div className="item__card">
          <div className="item__circle">
            <div className="item__initials">{initials}</div>
          </div>
          <div className="item__data">
            <div>Name: {name}</div>
            <div>Birth year: {birth_year}</div>
            <div>Gender: {gender}</div>
          </div>
        </div>
      </NavLink>
    </section>
  );
};

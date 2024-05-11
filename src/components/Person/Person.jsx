import React from 'react';
import {NavLink} from 'react-router-dom';

import './person.css';

export const Person = ({name, birth_year, gender, url}) => {
  const getInitials = name => {
    const words = name.split(/[\s-]+/);
    let initials = '';
    for (let i = 0; i < words.length; i++) {
      initials += words[i].charAt(0).toUpperCase();
    }
    return initials;
  };
  const initials = getInitials(name);

  const personId = url.match(/\/(\d+)/)[1];

  return (
    <section className="person">
      <NavLink className="person__link" to={'/people/' + personId}>
        <div className="person__card">
          <div className="person__circle">
            <div className="person__initials">{initials}</div>
          </div>
          <div className="person__data">
            <div>Name: {name}</div>
            <div>Birth year: {birth_year}</div>
            <div>Gender: {gender}</div>
          </div>
        </div>
      </NavLink>
    </section>
  );
};

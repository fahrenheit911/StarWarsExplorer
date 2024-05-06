import React from 'react';
import './person.css';

export const Person = ({index, name, birth_year, gender, clickPerson}) => {
  const getInitials = name => {
    const words = name.split(/[\s-]+/);
    let initials = '';
    for (let i = 0; i < words.length; i++) {
      initials += words[i].charAt(0).toUpperCase();
    }
    return initials;
  };
  const initials = getInitials(name);

  return (
    <section className="person">
      <div className="person__card" onClick={() => clickPerson(name, index)}>
        <div className="person__circle">
          <div className="person__initials">{initials}</div>
        </div>
        <div className="person__data">
          <div>Name: {name}</div>
          <div>Birth year: {birth_year}</div>
          <div>Gender: {gender}</div>
        </div>
      </div>
    </section>
  );
};

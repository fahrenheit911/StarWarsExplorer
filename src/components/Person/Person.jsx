import React from 'react';
import './person.css';

export const Person = ({name, birth_year, gender}) => {
  return (
    <section className="person">
      <div className="person__card">
        <div className="person__circle"></div>
        <div className="person__data">
          <div>Name: {name}</div>
          <div>Birth year: {birth_year}</div>
          <div>Gender: {gender}</div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import './person.css';

export const Person = ({name, birth_year, gender}) => {
  return (
    <>
      <section className="person">
        <div className="person-card">
          <div className="circle"></div>
          <div className="person-data">
            <div>Name: {name}</div>
            <div>Birth year: {birth_year}</div>
            <div>Gender: {gender}</div>
          </div>
        </div>
      </section>
    </>
  );
};

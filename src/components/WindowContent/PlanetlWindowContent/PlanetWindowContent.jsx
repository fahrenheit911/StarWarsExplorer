import React from 'react';
import {NavLink} from 'react-router-dom';
import {createAppUrl} from '../../../Utils/createAppUrl';

import './planetWindowContent.css';

export const PlanetWindowContent = ({planet}) => {
  return (
    <>
      <h1 className="modal__content-title">{planet?.name}</h1>
      <hr></hr>
      <div className="modal__container">
        <div className="modal__container-block-left">
          <div className="modal__container-block-left-headline">Stats</div>
          <ul className="lists">
            <li className="list">Rotation period: {planet?.rotation_period}</li>
            <li className="list">Orbital period: {planet?.orbital_period}</li>
            <li className="list">Diameter: {planet?.diameter}</li>
            <li className="list">Climate: {planet?.climate}</li>
            <li className="list">Gravity: {planet?.gravity}</li>
            <li className="list">Terrain: {planet?.terrain}</li>
            <li className="list">Surface water: {planet?.surface_water}</li>
            <li className="list">Population: {planet?.population}</li>
          </ul>
        </div>
        <div className="modal__container-block-right">
          <div className="block__residents">
            <div className="block__category">Residents:</div>
            <div className="block__category-list">
              <ul>
                {planet?.residents?.length > 0 ? (
                  planet?.residents?.map((resident, index) => (
                    <li key={index}>
                      <NavLink className="link" to={createAppUrl(resident.url)}>
                        {resident.name}
                      </NavLink>
                    </li>
                  ))
                ) : (
                  <li style={{marginLeft: '10px'}}>n/a</li>
                )}
              </ul>
            </div>
          </div>
          <div className="block__films">
            <div className="block__category">Films:</div>
            <div className="block__category-list">
              <ul>
                {planet?.films?.length > 0 ? (
                  planet?.films?.map((film, index) => (
                    <li key={index}>
                      <NavLink className="link" to={createAppUrl(film.url)}>
                        {film.title}
                      </NavLink>
                    </li>
                  ))
                ) : (
                  <li style={{marginLeft: '10px'}}>n/a</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

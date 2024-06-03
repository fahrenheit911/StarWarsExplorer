import React from 'react';
import {NavLink} from 'react-router-dom';
import {createAppUrl} from '../../../Utils/createAppUrl';
import StatsBlock from '../../StatsBlock';

import '../../../styles/modalWindow.css';

export const PlanetWindowContent = ({planet}) => {
  const stats = [
    {label: 'Rotation period', value: planet?.rotation_period || 'n/a'},
    {label: 'Orbital period', value: planet?.orbital_period || 'n/a'},
    {label: 'Diameter', value: planet?.diameter || 'n/a'},
    {label: 'Climate', value: planet?.climate || 'n/a'},
    {label: 'Gravity', value: planet?.gravity || 'n/a'},
    {label: 'Terrain', value: planet?.terrain || 'n/a'},
    {label: 'Surface water', value: planet?.surface_water || 'n/a'},
    {label: 'Population', value: planet?.population || 'n/a'},
  ];

  return (
    <>
      <h1 className="modal__content-title">{planet?.name}</h1>
      <hr></hr>
      <div className="modal__container">
        <div className="modal__container-block-left">
          <StatsBlock title="Stats" stats={stats} />
        </div>
        <div className="modal__container-block-right">
          <div className="block__category">
            <div className="block__category-title">Residents:</div>
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
          <div className="block__category">
            <div className="block__category-title">Films:</div>
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

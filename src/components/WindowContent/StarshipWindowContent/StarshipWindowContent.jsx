import React from 'react';
import {NavLink} from 'react-router-dom';
import {createAppUrl} from '../../../Utils/createAppUrl';
import StatsBlock from '../../StatsBlock';

import '../../../styles/modalWindow.css';

export const StarshipWindowContent = ({starship}) => {
  const stats = [
    {label: 'Manafacturer', value: starship?.manufacturer || 'n/a'},
    {label: 'Cost', value: starship?.cost_in_credits || 'n/a'},
    {label: 'Lenght', value: starship?.lenght || 'n/a'},
    {label: 'Max speed', value: starship?.max_speed || 'n/a'},
    {label: 'Crew', value: starship?.crew || 'n/a'},
    {label: 'Passengers', value: starship?.passengers || 'n/a'},
    {label: 'Cargo capaciry', value: starship?.cargo_capaciry || 'n/a'},
    {label: 'Consumables', value: starship?.consumables || 'n/a'},
    {label: 'Hyperdrive rating', value: starship?.hyperdrive_rating || 'n/a'},
    {label: 'MGLT', value: starship?.MGLT || 'n/a'},
    {label: 'Starship class', value: starship?.starship_class || 'n/a'},
  ];
  return (
    <>
      <h1 className="modal__content-title">{starship?.name + '*' + starship?.model}</h1>
      <hr></hr>
      <div className="modal__container">
        <div className="modal__container-block-left">
          <StatsBlock title="Stats" stats={stats} />
        </div>
        <div className="modal__container-block-right">
          <div className="block__category">
            <div className="block__category-title">Films:</div>
            <div className="block__category-list">
              <ul>
                {starship?.pilots?.length > 0 ? (
                  starship?.films?.map((film, index) => (
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
          <div className="block__category">
            <div className="block__category-title">Pilots:</div>
            <div className="block__category-list">
              <ul>
                {starship?.pilots?.length > 0 ? (
                  starship?.pilots?.map((pilot, index) => (
                    <li key={index}>
                      <NavLink className="link" to={createAppUrl(pilot.url)}>
                        {pilot.name}
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

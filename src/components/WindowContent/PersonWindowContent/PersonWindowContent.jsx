import React from 'react';
import {NavLink} from 'react-router-dom';
import {createAppUrl} from '../../../Utils/createAppUrl';
import StatsBlock from '../../StatsBlock';

import '../../../styles/modalWindow.css';

export const PersonWindowContent = ({person}) => {
  const apperances = [
    {label: 'Hair color', value: person?.hair_color},
    {label: 'Skin color', value: person?.skin_color},
    {label: 'Eye color', value: person?.eye_color},
    {label: 'Gender', value: person?.gender},
  ];

  const stats = [
    {label: 'Height', value: person?.height},
    {label: 'Mass', value: person?.mass},
  ];

  return (
    <>
      <h1 className="modal__content-title">{person?.name}</h1>
      <hr></hr>
      <div className="modal__container">
        <div className="modal__container-block-left">
          <div className="modal__container-block-left-top">
            <StatsBlock title="Apperance" stats={apperances} />
          </div>
          <div className="modal__container-block-left-bottom">
            <StatsBlock title="Stats" stats={stats} />
          </div>
        </div>
        <div className="modal__container-block-right">
          <div className="block__category">
            <div className="block__category-title">Home world:</div>
            <div className="block__category-list">
              <NavLink className="link" to={createAppUrl(person?.homeworld?.url)}>
                {person?.homeworld?.name}
              </NavLink>
            </div>
          </div>
          <div className="block__category">
            <div className="block__category-title">Films:</div>
            <div className="block__category-list">
              <ul>
                {person?.films?.length > 0 ? (
                  person?.films?.map((film, index) => (
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
            <div className="block__category-title">Vehicles:</div>
            <div className="block__category-list">
              <ul>
                {person?.vehicles?.length > 0 ? (
                  person?.vehicles?.map((vehicle, index) => (
                    <li key={index}>
                      <NavLink className="link" to={createAppUrl(vehicle.url)}>
                        {vehicle.name}
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
            <div className="block__category-title">Starships:</div>
            <div className="block__category-list">
              <ul>
                {person?.starships?.length > 0 ? (
                  person?.starships?.map((starship, index) => (
                    <li key={index}>
                      <NavLink className="link" to={createAppUrl(starship.url)}>
                        {starship.name}
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

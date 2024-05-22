import React from 'react';
import {NavLink} from 'react-router-dom';
import {createAppUrl} from '../../../Utils/createAppUrl';

export const StarshipWindowContent = ({starship}) => {
  return (
    <>
      <h1 className="modal__content-title">{starship?.name + '*' + starship?.model}</h1>
      <hr></hr>
      <div className="modal__container">
        <div className="modal__container-block-left">
          <div className="modal__container-block-left-headline">Stats</div>
          <ul className="lists">
            <li className="list">Manafacturer: {starship?.manufacturer}</li>
            <li className="list">Cost: {starship?.cost_in_credits}</li>
            <li className="list">Lenght: {starship?.length}</li>
            <li className="list">Max speed: {starship?.max_atmosphering_speed}</li>
            <li className="list">Crew: {starship?.crew}</li>
            <li className="list">Passengers: {starship?.passengers}</li>
            <li className="list">Cargo capaciry: {starship?.cargo_capacity}</li>
            <li className="list">Consumables: {starship?.consumables}</li>
            <li className="list">Hyperdrive rating: {starship?.hyperdrive_rating}</li>
            <li className="list">MGLT: {starship?.MGLT}</li>
            <li className="list">Starship class: {starship?.starship_class}</li>
          </ul>
        </div>
        <div className="modal__container-block-right">
          <div className="block__residents">
            <div className="block__category">Films:</div>
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
          <div className="block__films">
            <div className="block__category">Pilots:</div>
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

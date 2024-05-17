import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {getInternalLink} from '../../../Utils/getInternalLink';
import Loader from '../../Loader';

export const StarshipModalWindow = ({onClose}) => {
  const starship = useSelector(state => state?.starship?.data);
  const loading = useSelector(state => state?.starship?.isLoading);

  const onWrapperClick = e => {
    if (e.target.classList.contains('modal__wrapper')) onClose();
  };

  return (
    <div className="modal">
      <div className="modal__wrapper" onClick={onWrapperClick}>
        <div className="modal__content">
          {loading ? (
            <Loader />
          ) : (
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
                        {starship?.films?.map((film, index) => (
                          <li key={index}>
                            <NavLink className="link" to={getInternalLink(film.url)}>
                              {film.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="block__films">
                    <div className="block__category">Pilots:</div>
                    <div className="block__category-list">
                      <ul>
                        {starship?.pilots?.map((pilot, index) => (
                          <li key={index}>
                            <NavLink className="link" to={getInternalLink(pilot.url)}>
                              {pilot.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

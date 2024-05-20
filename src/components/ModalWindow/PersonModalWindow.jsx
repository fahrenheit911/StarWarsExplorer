import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import Loader from '../Loader';
import './personModalWindow.css';

export const PersonModalWindow = ({onClose}) => {
  const person = useSelector(state => state?.person?.data);
  const loading = useSelector(state => state?.person?.isLoading);

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
              <h1 className="modal__content-title">{person?.name}</h1>
              <hr></hr>
              <div className="modal__container">
                <div className="modal__container-block-left">
                  <div className="modal__container-block-left-top">
                    <div className="modal__container-block-left-headline">Apperance</div>
                    <ul className="lists">
                      <li className="list">Hair color: {person?.hair_color}</li>
                      <li className="list">Skin color: {person?.skin_color}</li>
                      <li className="list">Eye color: {person?.eye_color}</li>
                      <li className="list">Gender: {person?.gender}</li>
                    </ul>
                  </div>
                  <div className="modal__container-block-left-bottom">
                    <div className="modal__container-block-left-headline">Stats</div>
                    <ul className="lists">
                      <li className="list">Height: {person?.height}</li>
                      <li className="list">Mass: {person?.mass}</li>
                    </ul>
                  </div>
                </div>
                <div className="modal__container-block-right">
                  <div className="block__homeword">
                    <div className="block__category">Home world:</div>
                    <div className="block__category-list">
                      <NavLink className="link" to={person?.homeworld?.url}>
                        {person?.homeworld?.name}
                      </NavLink>
                    </div>
                  </div>
                  <div className="block__films">
                    <div className="block__category">Films:</div>
                    <div className="block__category-list">
                      <ul>
                        {person?.films?.map((film, index) => (
                          <li key={index}>
                            <NavLink className="link" to={film.url}>
                              {film.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="block__vehicles">
                    <div className="block__category">Vehicles:</div>
                    <div className="block__category-list">
                      <ul>
                        {person?.vehicles?.map((vehicle, index) => (
                          <li key={index}>
                            <NavLink className="link" to={vehicle.url}>
                              {vehicle.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="block__starships">
                    <div className="block__category">Starships:</div>
                    <div className="block__category-list">
                      <ul>
                        {person?.starships?.map((starship, index) => (
                          <li key={index}>
                            <NavLink className="link" to={starship.url}>
                              {starship.name}
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

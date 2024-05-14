import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import Loader from '../Loader';
import './planetModalWindow.css';

export const PlanetModalWindow = ({onClose}) => {
  const planet = useSelector(state => state?.planet?.data);
  const loading = useSelector(state => state?.planet?.isLoading);

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
              <h1 className="modal__content-title">{planet?.name}</h1>
              <hr></hr>
              <div className="modal__container">
                <div className="modal__container-block-left">
                  <div className="modal__container-block-left-top">
                    <div className="modal__container-block-left-headline">Apperance</div>
                    <ul className="lists">
                      <li className="list">Hair color: {planet?.hair_color}</li>
                      <li className="list">Skin color: {planet?.skin_color}</li>
                      <li className="list">Eye color: {planet?.eye_color}</li>
                      <li className="list">Gender: {planet?.gender}</li>
                    </ul>
                  </div>
                </div>
                <div className="modal__container-block-right">
                  <div className="block__films">
                    <div className="block__category">Residents:</div>
                    <div className="block__category-list">
                      <ul>
                        {planet?.residents?.map((resident, index) => (
                          <li key={index}>
                            <NavLink className="link" to={resident.url}>
                              {resident.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="block__films">
                    <div className="block__category">Films:</div>
                    <div className="block__category-list">
                      <ul>
                        {planet?.films?.map((film, index) => (
                          <li key={index}>
                            <NavLink className="link" to={film.url}>
                              {film.title}
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

import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Loader from '../Loader';

import './modalwindow.css';

export const ModalWindow = ({onClose}) => {
  const [homeworldName, setHomeworldName] = useState('');

  const person = useSelector(state => state?.person?.data);
  const loading = useSelector(state => state?.person?.isLoading);

  useEffect(() => {
    const fetchHomeworldName = async () => {
      try {
        const response = await fetch(person.homeworld);
        const data = await response.json();
        if (data && data.name) {
          setHomeworldName(data.name);
        }
      } catch (error) {
        console.error('Error fetching homeworld data:', error);
      }
    };
    fetchHomeworldName();
  }, [person.homeworld]);

  const onWrapperClick = e => {
    if (e.target.classList.contains('modal__wrapper')) onClose();
  };

  return (
    <>
      {loading ? (
        <div className="modal">
          <div className="modal__wrapper">
            <div className="modal__content">
              <Loader />
            </div>
          </div>
        </div>
      ) : (
        <div className="modal">
          <div className="modal__wrapper" onClick={onWrapperClick}>
            <div className="modal__content">
              <h1 className="modal__content-title">{person.name}</h1>
              <hr></hr>
              <div className="modal__container">
                <div className="modal__container-block-left">
                  <div className="modal__container-block-left-top">
                    <div className="modal__container-block-left-headline">Apperance</div>
                    <ul className="lists">
                      <li className="list">Hair color: {person.hair_color}</li>
                      <li className="list">Skin color: {person.skin_color}</li>
                      <li className="list">Eye color: {person.eye_color}</li>
                      <li className="list">Gender: {person.gender}</li>
                    </ul>
                  </div>
                  <div className="modal__container-block-left-bottom">
                    <div className="modal__container-block-left-headline">Stats</div>
                    <ul className="lists">
                      <li className="list">Height: {person.height}</li>
                      <li className="list">Mass: {person.mass}</li>
                    </ul>
                  </div>
                </div>
                <div className="modal__container-block-right">
                  <div className="block__homeword">
                    <div>Home world:</div>
                    <a className="link" href={person.homeworld}>
                      {homeworldName}
                    </a>
                  </div>
                  <div className="block__films">
                    <div>Films:</div>
                    <ul>
                      {person.films.map((film, index) => (
                        <li key={index}>
                          <a className="link" href={'ggg'}>
                            {film}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="block__vehicles">
                    <div>Vehicles:</div>
                    <ul>
                      {person.vehicles.map((vehicle, index) => (
                        <li key={index}>
                          <a className="link" href={vehicle}>
                            {vehicle}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="block__starships">
                    <div>Starships: </div>
                    <ul>
                      {person.starships.map((starship, index) => (
                        <li key={index}>
                          <a className="link" href={starship}>
                            {starship}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

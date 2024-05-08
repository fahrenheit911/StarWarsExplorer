import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import Loader from '../Loader';

import './modalwindow.css';

export const ModalWindow = ({onClose}) => {
  const [homeworldData, setHomeworldData] = useState([]);
  const [filmsData, setFilmsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const person = useSelector(state => state?.person?.data);

  useEffect(() => {
    const fetchHomeworldName = async () => {
      try {
        const response = await fetch(person.homeworld);
        if (response.ok) {
          const data = await response.json();
          setHomeworldData(data);
        } else {
          throw new Error('Failed to fetch homeworld data');
        }
      } catch (error) {
        console.error('Error fetching homeworld data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchHomeworldName();
  }, []);

  useEffect(() => {
    const fetchFilmsData = async () => {
      const films = [];
      for (const url of person.films) {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const filmData = await response.json();
            films.push(filmData);
          } else {
            throw new Error('Failed to fetch homeworld data');
          }
        } catch (error) {
          console.error('Error fetching vehicle data:', error);
        }
      }
      setFilmsData(films);
    };
    fetchFilmsData();
  }, []);

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
                    <NavLink className="link" to={homeworldData.url}>
                      {homeworldData.name}
                    </NavLink>
                  </div>
                  <div className="block__films">
                    <div>Films:</div>
                    <ul>
                      {filmsData.map((film, index) => (
                        <li key={index}>
                          <NavLink className="link" to={film.url}>
                            {film.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="block__vehicles">
                    <div>Vehicles:</div>
                    <ul>
                      {person.vehicles.map((vehicle, index) => (
                        <li key={index}>
                          <NavLink className="link" to={vehicle}>
                            {vehicle}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="block__starships">
                    <div>Starships: </div>
                    <ul>
                      {person.starships.map((starship, index) => (
                        <li key={index}>
                          <NavLink className="link" to={starship}>
                            {starship}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
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

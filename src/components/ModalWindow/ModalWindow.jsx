import React, {useState, useEffect} from 'react';

import './modalwindow.css';

export const ModalWindow = ({
  onClose,
  name,
  hair_color,
  skin_color,
  eye_color,
  gender,
  homeworld,
  films,
  height,
  mass,
  vehicles,
  starships,
}) => {
  const [homeworldName, setHomeworldName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(homeworld);
        const data = await response.json();
        if (data && data.name) {
          setHomeworldName(data.name);
        }
      } catch (error) {
        console.error('Error fetching homeworld data:', error);
      }
    };
    fetchData();
  });

  const onWrapperClick = e => {
    if (e.target.classList.contains('modal__wrapper')) onClose();
  };

  return (
    <div className="modal">
      <div className="modal__wrapper" onClick={onWrapperClick}>
        <div className="modal__content">
          <h1 className="modal__content-title">{name}</h1>
          <hr></hr>
          <div className="modal__container">
            <div className="modal__container-block-left">
              <div className="modal__container-block-left-top">
                <div className="modal__container-block-left-headline">Apperance</div>
                <ul className="lists">
                  <li className="list">Hair color: {hair_color}</li>
                  <li className="list">Skin color: {skin_color}</li>
                  <li className="list">Eye color: {eye_color}</li>
                  <li className="list">Gender: {gender}</li>
                </ul>
              </div>
              <div className="modal__container-block-left-bottom">
                <div className="modal__container-block-left-headline">Stats</div>
                <ul className="lists">
                  <li className="list">Height: {height}</li>
                  <li className="list">Mass: {mass}</li>
                </ul>
              </div>
            </div>
            <div className="modal__container-block-right">
              <div className="block__homeword">
                <div>Home world:</div>
                <a className="link" href={homeworld}>
                  {homeworldName}
                </a>
              </div>
              <div className="block__films">
                <div>Films:</div>
                <ul>
                  {films.map((film, index) => (
                    <li key={index}>
                      <a className="link" href={film}>
                        {film}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="block__vehicles">
                <div>Vehicles:</div>
                <ul>
                  {vehicles.map((vehicle, index) => (
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
                  {starships.map((starship, index) => (
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
  );
};

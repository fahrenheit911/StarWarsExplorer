import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Planet from '../components/Planet';
import Button from '../components/Button';
import ModalWindow from '../components/ModalWindow';
import {loadData, nextLoadData, getPlanetData} from '../Utils/dataLoad';
import {
  updateLoadStatePlanets,
  updateDataPlanets,
  updateNewDataPlanets,
} from '../redux/planetsSlice.js';

import './page.css';

export const Planets = () => {
  const [planetUrlId, setPlanetUrlId] = useState(null);

  const params = useParams();
  const dispatch = useDispatch();

  const planets = useSelector(state => state?.planets?.data?.results);
  const loading = useSelector(state => state?.planets?.isLoading);
  const nextUrl = useSelector(state => state?.planets?.data?.next);

  useEffect(() => {
    setPlanetUrlId(params.plid);
    if (planetUrlId) dispatch(getPlanetData(planetUrlId));
  }, [dispatch, params.plid, planetUrlId]);

  useEffect(() => {
    dispatch(
      loadData('https://swapi.py4e.com/api/planets', updateLoadStatePlanets, updateDataPlanets)
    );
  }, [dispatch]);

  const loadMore = () => {
    dispatch(nextLoadData(nextUrl, updateLoadStatePlanets, updateNewDataPlanets));
  };

  return (
    <article>
      <section className="container">
        {planets.map((planet, index) => (
          <Planet key={index} index={index} {...planet} />
        ))}
      </section>
      {nextUrl && (
        <Button
          title={loading ? 'Loading...' : 'Load more'}
          disabled={loading}
          onClick={loadMore}
        />
      )}
      {planetUrlId && <ModalWindow planetUrlId={planetUrlId} />}
    </article>
  );
};

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Starship from '../components/Starship';
import Button from '../components/Button';
import ModalWindow from '../components/ModalWindow';
import {loadData, nextLoadData, getStarshipData} from '../Utils/dataLoad';
import {
  updateLoadStateStarships,
  updateDataStarships,
  updateNewDataStarships,
} from '../redux/starshipsSlice.js';

import './page.css';

export const Starships = () => {
  const [starshipUrlId, setStarshipUrlId] = useState(null);

  const params = useParams();
  const dispatch = useDispatch();

  const starships = useSelector(state => state?.starships?.data?.results);
  const loading = useSelector(state => state?.starships?.isLoading);
  const nextUrl = useSelector(state => state?.starships?.data?.next);

  useEffect(() => {
    setStarshipUrlId(params.stid);
    if (starshipUrlId) dispatch(getStarshipData(starshipUrlId));
  }, [dispatch, params.stid, starshipUrlId]);

  useEffect(() => {
    dispatch(
      loadData(
        'https://swapi.py4e.com/api/starships',
        updateLoadStateStarships,
        updateDataStarships
      )
    );
  }, [dispatch]);

  const loadMore = () => {
    dispatch(nextLoadData(nextUrl, updateLoadStateStarships, updateNewDataStarships));
  };
  return (
    <article>
      <section className="container">
        {starships.map((starship, index) => (
          <Starship key={index} index={index} {...starship} />
        ))}
      </section>
      {nextUrl && (
        <Button
          title={loading ? 'Loading...' : 'Load more'}
          disabled={loading}
          onClick={loadMore}
        />
      )}
      {starshipUrlId && <ModalWindow starshipUrlId={starshipUrlId} />}
    </article>
  );
};

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Person from '../components/Person';
import Button from '../components/Button';
import ModalWindow from '../components/ModalWindow';
import {loadData, nextLoadData, getPersonData} from '../Utils/dataLoad';

import './page.css';

export const People = () => {
  const [personUrlId, setPersonUrlId] = useState(null);

  const params = useParams();
  const dispatch = useDispatch();

  const people = useSelector(state => state?.people?.data?.results);
  const loading = useSelector(state => state?.people?.isLoading);
  const nextUrl = useSelector(state => state?.people?.data?.next);

  useEffect(() => {
    setPersonUrlId(params.id);
    if (personUrlId) dispatch(getPersonData(personUrlId));
  }, [dispatch, params.id, personUrlId]);

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const loadMore = () => {
    dispatch(nextLoadData(nextUrl));
  };

  return (
    <article>
      <section className="container">
        {people.map((person, index) => (
          <Person key={index} index={index} {...person} />
        ))}
      </section>
      {nextUrl && (
        <Button
          title={loading ? 'Loading...' : 'Load more'}
          onClick={loadMore}
          disabled={loading}
        />
      )}
      {personUrlId && <ModalWindow personUrlId={personUrlId} />}
    </article>
  );
};

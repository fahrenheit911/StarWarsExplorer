import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';
import Person from '../components/Person';
import Button from '../components/Button';
import ModalWindow from '../components/ModalWindow';
import {loadData, nextLoadData, getPersonData} from '../redux/dataLoad';

import './page.css';

export const People = () => {
  const [personUrlId, setPersonUrlId] = useState(null);

  const people = useSelector(state => state?.people?.data?.results);
  const loading = useSelector(state => state?.people?.isLoading);
  const nextUrl = useSelector(state => state?.people?.data?.next);

  const params = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  useEffect(() => {
    setPersonUrlId(params.urlid);
    if (personUrlId) dispatch(getPersonData(personUrlId));
  }, [dispatch, params.urlid, personUrlId, setPersonUrlId]);

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
      {personUrlId && <ModalWindow onClose={() => navigate('/')} urlId={personUrlId} />}
    </article>
  );
};

import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Person from '../components/Person';
import Button from '../components/Button';
import {dataLoad, nextDataLoad} from '../redux/dataLoad';

import './page.css';

export const People = () => {
  const people = useSelector(state => state?.people?.data?.results);
  const loading = useSelector(state => state?.people?.isLoading);
  const nextUrl = useSelector(state => state?.people?.data?.next);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataLoad());
  }, [dispatch]);

  const loadMore = () => {
    dispatch(nextDataLoad(nextUrl));
  };

  return (
    <>
      <section className="container">
        {people.map(person => (
          <Person key={person.name} {...person} />
        ))}
      </section>
      {nextUrl && <Button title={loading ? 'Loading...' : 'Load more'} onClick={loadMore} />}
    </>
  );
};

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Person from '../components/Person';
import Button from '../components/Button';
import {loadData, nextLoadData} from '../redux/dataLoad';

import './page.css';

export const People = () => {
  const people = useSelector(state => state?.people?.data?.results);
  const loading = useSelector(state => state?.people?.isLoading);
  const nextUrl = useSelector(state => state?.people?.data?.next);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const loadMore = () => {
    dispatch(nextLoadData(nextUrl));
  };

  return (
    <article>
      <section className="container">
        {people.map(person => (
          <Person key={person.name} {...person} />
        ))}
      </section>
      {nextUrl && (
        <Button
          title={loading ? 'Loading...' : 'Load more'}
          onClick={loadMore}
          disabled={loading}
        />
      )}
    </article>
  );
};

import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Person from '../components/Person';
import Button from '../components/Button';
import {dataLoad, nextDataLoad} from '../redux/dataLoad';

import './page.css';

export const People = () => {
  const [count, setCount] = useState(null);

  const people = useSelector(state => state?.people?.data?.results);
  const loading = useSelector(state => state?.people?.isLoading);
  const totalCount = useSelector(state => state?.people?.data?.count);
  const nextPage = useSelector(state => state?.people?.data?.next);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataLoad());
  }, [dispatch]);

  const loadMore = () => {
    dispatch(nextDataLoad(nextPage));
    setCount(count + 10);
  };

  return (
    <>
      <section className="container">
        {people.map(person => (
          <Person key={person.name} {...person} />
        ))}
      </section>
      {count < totalCount && (
        <Button title={loading ? 'Loading...' : 'Load more'} onClick={loadMore} />
      )}
    </>
  );
};

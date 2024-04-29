import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Person from '../components/Person';
import Button from '../components/Button';
import {dataLoad} from '../redux/dataLoad';

import './page.css';

export const People = () => {
  const [newData, setNewData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(null);

  const people = useSelector(state => state?.people?.data?.results);
  const loading = useSelector(state => state?.people?.isLoading);
  const totalCount = useSelector(state => state?.people?.data?.count);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNewData = async () => {
      try {
        const response = await fetch(`https://swapi.py4e.com/api/people/?page=${page}`);

        const newData = await response.json();
        setCount(count + 10);

        setNewData(people => [...people, ...newData.results]);
      } catch (error) {}
    };
    fetchNewData();
  }, [page]);

  useEffect(() => {
    dispatch(dataLoad);
  }, [dispatch]);

  return (
    <>
      <section className="container">
        {newData.map(person => (
          <Person key={person.name} {...person} />
        ))}
      </section>
      {count < totalCount && (
        <Button title={loading ? 'Loading...' : 'Load more'} onClick={() => setPage(page + 1)} />
      )}
    </>
  );
};

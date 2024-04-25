import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Person from '../components/Person';
import Button from '../components/Button';
import {dataLoad} from '../redux/dataLoad';

import './page.css';

export const People = () => {
  const people = useSelector(state => state?.people?.data?.results);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataLoad);
  }, [dispatch]);

  const handleClick = () => {
    console.log('People button clicked!');
  };

  return (
    <>
      <section className="container">
        {people.map((person, i) => (
          <Person key={person.name} {...person} />
        ))}
      </section>
      <Button title="Load more" onClick={handleClick} />
    </>
  );
};
